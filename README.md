# pchrome

I wanted TypeScript type declarations and a Promise-oriented API for the Chrome
API.

You can get one of the two, but not both, with existing stuff:

- DefinitelyTyped's [chrome declaration file](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/chrome/chrome.d.ts)
- various Chrome promise libraries, including
  - [chrome-promise](https://github.com/tfoxy/chrome-promise)
  - [then-chrome](https://github.com/acvetkov/then-chrome)
  - [chromise](https://github.com/alexeykuzmin/chromise)

It's unfortunate, because the Chrome API is big (so you want type support) and
does a lot of async I/O (so you want Promises and async/await).

## Usage

`index.js` and `index.d.ts` are generated files that are in the repo and
should work out of the box if you just `npm install --save pchrome`.

Then `import * as pchrome from 'pchrome';` or `var pchrome = require('pchrome')`
as appropriate for your module system.

Now use `pchrome` as though it's the [`chrome`
object](https://developer.chrome.com/extensions/api_index), except calls with a
callback parameter now return a Promise instead. (Look at the type declarations
in `index.d.ts` for more details.) All other calls, events, member variables,
and so on are still present on `pchrome` as well.

Read on for how the `index.js` and `index.d.ts` generated and how you can
regenerate them.

## Generation

See `generate.ts`, which has a little TypeScript d.ts grammar and basically
transforms DefinitelyTyped's d.ts file into a promiseful version, along with JS
wrappers for all the async functions.

### Regeneration

Install dependencies with `npm install` and `typings install`.

Now `npm -g install ts-node`.

Then run `npm run build`, which executes `generate.ts`. That produces
`index.js` and `index.d.ts` which are the promisified Chrome APIs.

## Example

There's an example Chrome extension in the `example/` subfolder.

Run `webpack` in that folder (assuming you have webpack and TypeScript
installed).  It will generate the `bundle.js` for the Chrome extension
from `background.ts` and the pchrome library in the parent folder.

Then load `example/` into Chrome as an unpacked extension.
