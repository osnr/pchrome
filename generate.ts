/* Fragile, overcomplicated script to parse `chrome.d.ts` type declarations
   for Chrome API and generate `index.js` and `index.d.ts`: promisified
   wrapper functions for all async calls, and type declarations. */

import {
  Parser, string, regex, optWhitespace, lazy, seq, any, succeed, alt
} from 'parsimmon';

import * as assert from 'assert';
import * as fs from 'fs';

/* General utilities and combinators. */

function assertParse(p, s, expectedValue?) {
  const result = p.parse(s);
  assert(result.status, 'should parse: ' + s);

  if (expectedValue) {
    assert.deepEqual(result.value, expectedValue);
  }
}
function assertNotParse(p, s) { assert(!p.parse(s).status, 'should not parse: ' + s); }

// Newer Parsimmon versions have these, but the DefinitelyTyped one doesn't atm.
function sepBy<U>(parser: Parser<U>, separator: Parser<any>): Parser<U[]> {
  return sepBy1(parser, separator).or(succeed([]));
}
function sepBy1<U>(parser: Parser<U>, separator: Parser<any>): Parser<U[]> {
  const pairs = separator.then(parser).many();

  return parser.chain(function(r) {
    return pairs.map(function(rs) {
      return [r].concat(rs);
    })
  })
}

/* Now the actual grammar and unit tests. */

function lexeme<U>(p: Parser<U>): Parser<U> { return p.skip(optWhitespace); }
function lexemeS(s: string): Parser<string> { return lexeme(string(s)); }

const lparen = lexemeS('(');
const rparen = lexemeS(')');
const colon = lexemeS(':');

// Including '.', '[', ']', '?'. Not strictly correct.
// Hack so I don't need to break out fields for array type, optional arg.
// FIXME Doesn't deal with generics '<', '>'.
const identifier: Parser<string> = lexeme(regex(/[\w\.\[\]?]+/));

assertParse(identifier, 'chrome.alarms');
assertParse(identifier, '__ident');
assertParse(identifier, '__ident01hello');
assertNotParse(identifier, 'this that');
assertNotParse(identifier, 'this: that');

interface FunctionTypeSignature {
  functionArguments: FunctionArgument[];
  functionReturn: TypeSignature;
}
type TypeSignature = string | FunctionTypeSignature;

interface FunctionArgument {
  argumentName: string;
  argumentType: TypeSignature;
}

const functionType: Parser<FunctionTypeSignature> =
  lazy('function type', () =>
    seq(
      lparen
        .then(sepBy(functionArgument, lexemeS(',')))
        .skip(rparen)
        .skip(lexemeS('=>')),
      typeSignature
    ).map(([functionArguments, functionReturn]: [FunctionArgument[], TypeSignature]) => ({
      functionArguments,
      functionReturn
    }))
  );

const typeSignature: Parser<TypeSignature> =
  identifier.or(functionType);

const functionArgument: Parser<FunctionArgument> =
  seq(
    identifier,
    colon.then(typeSignature)
  ).map(([argumentName, argumentType]: [string, TypeSignature]) => ({
    argumentName,
    argumentType
  }));

assertParse(functionArgument, 'details: AccessibilityFeaturesCallbackArg', {
  argumentName: 'details',
  argumentType: 'AccessibilityFeaturesCallbackArg'
});
assertNotParse(functionArgument, 'details AccessibilityFeaturesCallbackArg');

assertParse(functionType, '(details: AccessibilityFeaturesCallbackArg) => void');
assertNotParse(functionType, '(details: AccessibilityFeaturesCallbackArg => void');

assertParse(functionType, '() => void', {
  functionArguments: [],
  functionReturn: 'void'
});
assertParse(functionType, '(resourceIdentifiers?: ResourceIdentifier[]) => void', {
  functionArguments: [
    {
      argumentName: 'resourceIdentifiers?',
      argumentType: 'ResourceIdentifier[]'
    }
  ],
  functionReturn: 'void'
});
assertParse(functionType, '(info: OnClickData, tab?: chrome.tabs.Tab) => void');

interface FunctionDeclaration {
  functionName: string;
  functionArguments: FunctionArgument[];
  functionReturn: TypeSignature;
}
const exportFunctionDeclaration: Parser<FunctionDeclaration> =
  seq(
    lexemeS('export')
      .then(lexemeS('function'))
      .then(identifier.desc('function name')),
    lparen
      .then(sepBy(functionArgument, lexemeS(',')))
      .skip(rparen),
    colon
      .then(typeSignature)
      .skip(string(';')) // Let's not eat whitespace here.
  ).map(([functionName, functionArguments, functionReturn]: [string, FunctionArgument[], TypeSignature]) => ({
      functionName,
      functionArguments,
      functionReturn
  }));

assertParse(
  exportFunctionDeclaration,
  'export function remove(menuItemId: string, callback?: () => void): void;',
  {
    functionName: 'remove',
    functionArguments: [
      {
        argumentName: 'menuItemId',
        argumentType: 'string'
      },
      {
        argumentName: 'callback?',
        argumentType: {
          functionArguments: [],
          functionReturn: 'void'
        }
      }
    ],
    functionReturn: 'void'
  }
);
assertParse(exportFunctionDeclaration, 'export function cool(): void;');
assertNotParse(exportFunctionDeclaration, 'export function cool(): void');

// Used to ignore blocks we don't care about.
const anyBlock: Parser<string> = lazy(() =>
  seq(
    string('{'), // Let's not eat whitespace around the braces.
    alt(
      anyBlock,
      regex(/[^{}]+/)
    ).many().map(ss => ss.join('')),
    string('}')
  ).map(ss => ss.join(''))
);

assertParse(anyBlock, '{}', '{}');
assertParse(anyBlock, '{blah {} }', '{blah {} }');
assertNotParse(anyBlock, 'foo');
assertNotParse(anyBlock, '{foo');
assertNotParse(anyBlock, '{{foo}');

interface NamespaceDeclaration {
  namespaceName: string;
  children: (FunctionDeclaration|string)[];
}

const namespaceDeclaration: Parser<NamespaceDeclaration> =
  seq(
    lexemeS('declare')
      .then(lexemeS('namespace'))
      .then(identifier.desc('namespace name')),
    string('{').then(
      alt(
        exportFunctionDeclaration, // First check for 'export function...'.
        anyBlock,
        regex(/\w+\s*/), // Consume a whole word.
        regex(/[^{}]/) // Last fallback: consume one character.
      ).many()
    ).skip(lexemeS('}'))
  ).map(([namespaceName, children]: [string, (FunctionDeclaration|string)[]]) => ({
    namespaceName,
    children
  }));

assertParse(namespaceDeclaration, `
declare namespace chrome.contextMenus {
  interface UpdateProperties {}

  /**
    * Removes all context menu items added by this extension. */
  export function removeAll(callback?: () => void): void;

  export function create(createProperties: CreateProperties, callback?: () => void): void;
}
`.trim(), {
  namespaceName: 'chrome.contextMenus',
  children: [
    '\n', ' ', ' ',
    'interface ', 'UpdateProperties ', '{}', '\n', '\n',
    ' ', ' ', '/', '*', '*', '\n', ' ', ' ', ' ', ' ', '*', ' ',
    'Removes ', 'all ', 'context ', 'menu ', 'items ', 'added ', 'by ',
    'this ', 'extension', '.', ' ', '*', '/', '\n', ' ', ' ',
    {
      functionName: 'removeAll',
      functionArguments: [
        {
          argumentName: 'callback?',
          argumentType: {
            functionArguments: [],
            functionReturn: 'void'
          }
        }
      ],
      functionReturn: 'void'
    },
    '\n', '\n', ' ', ' ',
    {
      functionName: 'create',
      functionArguments: [
        {
          argumentName: 'createProperties',
          argumentType: 'CreateProperties'
        },
        {
          argumentName: 'callback?',
          argumentType: {
            functionArguments: [],
            functionReturn: 'void'
          }
        }
      ],
      functionReturn: 'void'
    },
    '\n'
  ]
});

const sourceFile: Parser<NamespaceDeclaration[]> =
  namespaceDeclaration
    .or(any.result(null))
    .many()
    .map(results => results.filter(r => r));

const source = fs.readFileSync('typings/globals/chrome/index.d.ts').toString();
const result = sourceFile.parse(source);
if (!result.status) {
  throw new Error('Failed to parse Chrome type declarations.');
}

/* Emit the promisified source. */
const ast: NamespaceDeclaration[] = result.value;

function stringifyTypeSignature(ts: TypeSignature): string {
  if (typeof ts === 'string') {
    return ts;

  } else {
    // ts is a function type.
    let out = '(';
    ts.functionArguments.forEach((arg, idx) => {
      if (idx > 0) out += ', ';
      out += `${arg.argumentName}: ${stringifyTypeSignature(arg.argumentType)}`;
    });
    out += `) => ${stringifyTypeSignature(ts.functionReturn)}`;
    return out;
  }
}

/* If applicable, strips the callback argument and makes the return type a
   Promise. Also returns asyncReturns[] as information about which arg positions
   map to which object keys.
   Otherwise, passes the function through, unchanged. */
function promiseTransform(ns: NamespaceDeclaration, fn: FunctionDeclaration): FunctionDeclaration {
  const debugName = ns.namespaceName + '.' + fn.functionName;

  // TODO Should this check the arg type instead?
  const callbacks = fn.functionArguments.filter(arg => !!arg.argumentName.match('[Cc]allback'));

  if (callbacks.length === 0) {
    // Skip any function that isn't an async method; we'll just mirror these
    // at the end since they don't require any rewriting.
    return fn;

  } else if (callbacks.length > 1) {
    // TODO I don't know how to cope with multiple callbacks.
    // There aren't many of these anyway, so let's just not wrap them.
    console.log(`Multiple callback arguments for ${debugName}. Skipping.`);
    return fn;
  }

  if (fn.functionReturn !== 'void') {
    console.log(`Non-void return type from async function ${debugName}. Skipping.`);
    return fn;
  }

  const callback = callbacks[0];
  const nonCallbackArguments = fn.functionArguments.filter(arg =>
    !arg.argumentName.match('[Cc]allback')
  );

  if (callback.argumentType === 'Function') {
    // They really shouldn't do this.
    return {
      functionName: fn.functionName,
      functionArguments: nonCallbackArguments,
      functionReturn: 'Promise<any>'
    };

  } else if (typeof callback.argumentType === 'string') {
    // FIXME This will make us break horribly given a type alias for a
    // callback type or whatever.
    throw new Error(`Callback is a non-function type?? for ${debugName}`);

  } else {
    const asyncReturns = (callback.argumentType as FunctionTypeSignature).functionArguments;

    let promiseType;
    if (asyncReturns.length === 0) {
      promiseType = 'void';
    } else if (asyncReturns.length === 1) {
      promiseType = stringifyTypeSignature(asyncReturns[0].argumentType);
    } else {
      promiseType = '[' + asyncReturns.map(({argumentName, argumentType}) =>
        stringifyTypeSignature(argumentType)
      ).join(', ') + ']';
    }

    return {
      functionName: fn.functionName,
      functionArguments: nonCallbackArguments,
      functionReturn: `Promise<${promiseType}>`
    }
  }
}

// HACK because TypeScript now hates the eval name in newer compiler versions;
// it parses as though under ES6 rules.
function escapeName(name: string): string {
  if (name === 'eval') return 'eval_';
  else return name;
}

/* Generate a .d.ts file. */
function makeDeclaration(ast: NamespaceDeclaration[]): string {
  let out = [];
  const emit = s => out.push(s);

  ast.forEach(ns => {
    const subname = ns.namespaceName.replace('chrome.', '');

    emit(`export declare namespace ${subname} {\n`);
    ns.children.forEach(child => {
      if (typeof child === 'string') {
        emit(child);
        return;
      }

      const fn = promiseTransform(ns, child as FunctionDeclaration);

      emit(`export function ${escapeName(fn.functionName)}(`);
      fn.functionArguments.forEach((arg, idx) => {
        if (idx > 0) emit(', ');
        emit(`${arg.argumentName}: ${stringifyTypeSignature(arg.argumentType)}`);
      });
      emit(`): ${stringifyTypeSignature(fn.functionReturn)};\n`);
    });
    emit('}\n\n');
  });

  return out.join('');
}

/* Generate untyped JS that actually gets executed. */
function makeCode(ast: NamespaceDeclaration[]): string {
  let out = [];
  const emit = s => out.push(s);

  const defined = {};
  ast.forEach(ns => {
    const subname = ns.namespaceName.replace('chrome.', '');
    if (!(subname in defined)) {
      let prefix = '';
      subname.split('.').forEach((part, i) => {
        if (!(`${prefix}${part}` in defined)) {
          if (i === 0) {
            emit('export var ');
          }

          emit(`${prefix}${part} = {};\n`);

// A hack: all functions and other members of chrome.foo that we don't wrap
// will fall through into the prototype, which is chrome.foo itself, so
// we don't need to manually copy all the stuff into our new namespace.
// Catch error in case script doesn't have Chrome permission for this namespace.
          emit(
`try {
  Object.setPrototypeOf(${prefix}${part}, chrome.${prefix}${part});
} catch (e) {}
`);

          defined[`${prefix}${part}`] = true;
        }

        prefix = `${prefix}${part}.`;
      });
    }

    ns.children.forEach(child => {
      if (typeof child === 'string') {
        return;
      }

      const fn = promiseTransform(ns, child as FunctionDeclaration);
      if (fn === child) {
        // This function doesn't need to be wrapped,
        // so rely on the prototype passthrough and don't make a wrapper.
        return;
      }

      emit(`${subname}.${escapeName(fn.functionName)} = function ${escapeName(fn.functionName)}(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    ${ns.namespaceName}.${fn.functionName}.apply(null, args);
  });
};\n`);
    });
  });

  return out.join('');
}

console.log('Generating TypeScript declaration file index.d.ts:');
fs.writeFileSync('index.d.ts', makeDeclaration(ast));

console.log();

console.log('Generating JS file index.js:');
fs.writeFileSync('index.js', makeCode(ast));
