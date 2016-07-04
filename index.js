var accessibilityFeatures = module.exports.accessibilityFeatures = {};
try {
  Object.setPrototypeOf(accessibilityFeatures, chrome.accessibilityFeatures);
} catch (e) {}
var alarms = module.exports.alarms = {};
try {
  Object.setPrototypeOf(alarms, chrome.alarms);
} catch (e) {}
alarms.getAll = function getAll(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.alarms.getAll.apply(null, args);
  });
};
alarms.clearAll = function clearAll(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.alarms.clearAll.apply(null, args);
  });
};
alarms.clear = function clear(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.alarms.clear.apply(null, args);
  });
};
alarms.clear = function clear(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.alarms.clear.apply(null, args);
  });
};
alarms.get = function get(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.alarms.get.apply(null, args);
  });
};
alarms.get = function get(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.alarms.get.apply(null, args);
  });
};
var browser = module.exports.browser = {};
try {
  Object.setPrototypeOf(browser, chrome.browser);
} catch (e) {}
browser.openTab = function openTab(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browser.openTab.apply(null, args);
  });
};
var bookmarks = module.exports.bookmarks = {};
try {
  Object.setPrototypeOf(bookmarks, chrome.bookmarks);
} catch (e) {}
bookmarks.search = function search(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.bookmarks.search.apply(null, args);
  });
};
bookmarks.search = function search(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.bookmarks.search.apply(null, args);
  });
};
bookmarks.getTree = function getTree(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.bookmarks.getTree.apply(null, args);
  });
};
bookmarks.getRecent = function getRecent(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.bookmarks.getRecent.apply(null, args);
  });
};
bookmarks.get = function get(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.bookmarks.get.apply(null, args);
  });
};
bookmarks.get = function get(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.bookmarks.get.apply(null, args);
  });
};
bookmarks.create = function create(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.bookmarks.create.apply(null, args);
  });
};
bookmarks.move = function move(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.bookmarks.move.apply(null, args);
  });
};
bookmarks.update = function update(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.bookmarks.update.apply(null, args);
  });
};
bookmarks.remove = function remove(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.bookmarks.remove.apply(null, args);
  });
};
bookmarks.getChildren = function getChildren(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.bookmarks.getChildren.apply(null, args);
  });
};
bookmarks.getSubTree = function getSubTree(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.bookmarks.getSubTree.apply(null, args);
  });
};
bookmarks.removeTree = function removeTree(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.bookmarks.removeTree.apply(null, args);
  });
};
var browserAction = module.exports.browserAction = {};
try {
  Object.setPrototypeOf(browserAction, chrome.browserAction);
} catch (e) {}
browserAction.getBadgeText = function getBadgeText(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browserAction.getBadgeText.apply(null, args);
  });
};
browserAction.getTitle = function getTitle(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browserAction.getTitle.apply(null, args);
  });
};
browserAction.getBadgeBackgroundColor = function getBadgeBackgroundColor(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browserAction.getBadgeBackgroundColor.apply(null, args);
  });
};
browserAction.getPopup = function getPopup(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browserAction.getPopup.apply(null, args);
  });
};
browserAction.setIcon = function setIcon(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browserAction.setIcon.apply(null, args);
  });
};
var browsingData = module.exports.browsingData = {};
try {
  Object.setPrototypeOf(browsingData, chrome.browsingData);
} catch (e) {}
browsingData.settings = function settings(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.settings.apply(null, args);
  });
};
browsingData.removePluginData = function removePluginData(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.removePluginData.apply(null, args);
  });
};
browsingData.removeFormData = function removeFormData(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.removeFormData.apply(null, args);
  });
};
browsingData.removeFileSystems = function removeFileSystems(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.removeFileSystems.apply(null, args);
  });
};
browsingData.remove = function remove(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.remove.apply(null, args);
  });
};
browsingData.removePasswords = function removePasswords(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.removePasswords.apply(null, args);
  });
};
browsingData.removeCookies = function removeCookies(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.removeCookies.apply(null, args);
  });
};
browsingData.removeWebSQL = function removeWebSQL(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.removeWebSQL.apply(null, args);
  });
};
browsingData.removeAppcache = function removeAppcache(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.removeAppcache.apply(null, args);
  });
};
browsingData.removeDownloads = function removeDownloads(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.removeDownloads.apply(null, args);
  });
};
browsingData.removeLocalStorage = function removeLocalStorage(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.removeLocalStorage.apply(null, args);
  });
};
browsingData.removeCache = function removeCache(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.removeCache.apply(null, args);
  });
};
browsingData.removeHistory = function removeHistory(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.removeHistory.apply(null, args);
  });
};
browsingData.removeIndexedDB = function removeIndexedDB(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.browsingData.removeIndexedDB.apply(null, args);
  });
};
var commands = module.exports.commands = {};
try {
  Object.setPrototypeOf(commands, chrome.commands);
} catch (e) {}
commands.getAll = function getAll(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.commands.getAll.apply(null, args);
  });
};
var contentSettings = module.exports.contentSettings = {};
try {
  Object.setPrototypeOf(contentSettings, chrome.contentSettings);
} catch (e) {}
var contextMenus = module.exports.contextMenus = {};
try {
  Object.setPrototypeOf(contextMenus, chrome.contextMenus);
} catch (e) {}
contextMenus.removeAll = function removeAll(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.contextMenus.removeAll.apply(null, args);
  });
};
contextMenus.create = function create(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.contextMenus.create.apply(null, args);
  });
};
contextMenus.update = function update(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.contextMenus.update.apply(null, args);
  });
};
contextMenus.update = function update(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.contextMenus.update.apply(null, args);
  });
};
contextMenus.remove = function remove(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.contextMenus.remove.apply(null, args);
  });
};
contextMenus.remove = function remove(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.contextMenus.remove.apply(null, args);
  });
};
var cookies = module.exports.cookies = {};
try {
  Object.setPrototypeOf(cookies, chrome.cookies);
} catch (e) {}
cookies.getAllCookieStores = function getAllCookieStores(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.cookies.getAllCookieStores.apply(null, args);
  });
};
cookies.getAll = function getAll(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.cookies.getAll.apply(null, args);
  });
};
cookies.set = function set(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.cookies.set.apply(null, args);
  });
};
cookies.remove = function remove(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.cookies.remove.apply(null, args);
  });
};
cookies.get = function get(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.cookies.get.apply(null, args);
  });
};
var debugger_ = module.exports.debugger_ = {};
try {
  Object.setPrototypeOf(debugger_, chrome.debugger);
} catch (e) {}
debugger_.attach = function attach(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.debugger.attach.apply(null, args);
  });
};
debugger_.detach = function detach(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.debugger.detach.apply(null, args);
  });
};
debugger_.sendCommand = function sendCommand(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.debugger.sendCommand.apply(null, args);
  });
};
debugger_.getTargets = function getTargets(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.debugger.getTargets.apply(null, args);
  });
};
var declarativeContent = module.exports.declarativeContent = {};
try {
  Object.setPrototypeOf(declarativeContent, chrome.declarativeContent);
} catch (e) {}
var declarativeWebRequest = module.exports.declarativeWebRequest = {};
try {
  Object.setPrototypeOf(declarativeWebRequest, chrome.declarativeWebRequest);
} catch (e) {}
var desktopCapture = module.exports.desktopCapture = {};
try {
  Object.setPrototypeOf(desktopCapture, chrome.desktopCapture);
} catch (e) {}
var devtools = module.exports.devtools = {};
try {
  Object.setPrototypeOf(devtools, chrome.devtools);
} catch (e) {}
devtools.inspectedWindow = {};
try {
  Object.setPrototypeOf(devtools.inspectedWindow, chrome.devtools.inspectedWindow);
} catch (e) {}
devtools.inspectedWindow.eval_ = function eval_(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.devtools.inspectedWindow.eval.apply(null, args);
  });
};
devtools.inspectedWindow.getResources = function getResources(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.devtools.inspectedWindow.getResources.apply(null, args);
  });
};
devtools.network = {};
try {
  Object.setPrototypeOf(devtools.network, chrome.devtools.network);
} catch (e) {}
devtools.network.getHAR = function getHAR(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.devtools.network.getHAR.apply(null, args);
  });
};
devtools.panels = {};
try {
  Object.setPrototypeOf(devtools.panels, chrome.devtools.panels);
} catch (e) {}
devtools.panels.create = function create(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.devtools.panels.create.apply(null, args);
  });
};
devtools.panels.setOpenResourceHandler = function setOpenResourceHandler(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.devtools.panels.setOpenResourceHandler.apply(null, args);
  });
};
devtools.panels.openResource = function openResource(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.devtools.panels.openResource.apply(null, args);
  });
};
var documentScan = module.exports.documentScan = {};
try {
  Object.setPrototypeOf(documentScan, chrome.documentScan);
} catch (e) {}
documentScan.scan = function scan(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.documentScan.scan.apply(null, args);
  });
};
var downloads = module.exports.downloads = {};
try {
  Object.setPrototypeOf(downloads, chrome.downloads);
} catch (e) {}
downloads.search = function search(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.downloads.search.apply(null, args);
  });
};
downloads.pause = function pause(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.downloads.pause.apply(null, args);
  });
};
downloads.getFileIcon = function getFileIcon(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.downloads.getFileIcon.apply(null, args);
  });
};
downloads.getFileIcon = function getFileIcon(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.downloads.getFileIcon.apply(null, args);
  });
};
downloads.resume = function resume(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.downloads.resume.apply(null, args);
  });
};
downloads.cancel = function cancel(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.downloads.cancel.apply(null, args);
  });
};
downloads.download = function download(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.downloads.download.apply(null, args);
  });
};
downloads.erase = function erase(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.downloads.erase.apply(null, args);
  });
};
downloads.removeFile = function removeFile(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.downloads.removeFile.apply(null, args);
  });
};
downloads.acceptDanger = function acceptDanger(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.downloads.acceptDanger.apply(null, args);
  });
};
var enterprise = module.exports.enterprise = {};
try {
  Object.setPrototypeOf(enterprise, chrome.enterprise);
} catch (e) {}
enterprise.platformKeys = {};
try {
  Object.setPrototypeOf(enterprise.platformKeys, chrome.enterprise.platformKeys);
} catch (e) {}
enterprise.platformKeys.getToken = function getToken(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.enterprise.platformKeys.getToken.apply(null, args);
  });
};
enterprise.platformKeys.getCertificates = function getCertificates(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.enterprise.platformKeys.getCertificates.apply(null, args);
  });
};
enterprise.platformKeys.importCertificate = function importCertificate(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.enterprise.platformKeys.importCertificate.apply(null, args);
  });
};
enterprise.platformKeys.removeCertificate = function removeCertificate(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.enterprise.platformKeys.removeCertificate.apply(null, args);
  });
};
var events = module.exports.events = {};
try {
  Object.setPrototypeOf(events, chrome.events);
} catch (e) {}
var extension = module.exports.extension = {};
try {
  Object.setPrototypeOf(extension, chrome.extension);
} catch (e) {}
extension.isAllowedFileSchemeAccess = function isAllowedFileSchemeAccess(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.extension.isAllowedFileSchemeAccess.apply(null, args);
  });
};
extension.isAllowedIncognitoAccess = function isAllowedIncognitoAccess(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.extension.isAllowedIncognitoAccess.apply(null, args);
  });
};
extension.sendRequest = function sendRequest(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.extension.sendRequest.apply(null, args);
  });
};
extension.sendRequest = function sendRequest(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.extension.sendRequest.apply(null, args);
  });
};
var fileBrowserHandler = module.exports.fileBrowserHandler = {};
try {
  Object.setPrototypeOf(fileBrowserHandler, chrome.fileBrowserHandler);
} catch (e) {}
fileBrowserHandler.selectFile = function selectFile(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fileBrowserHandler.selectFile.apply(null, args);
  });
};
var fileSystemProvider = module.exports.fileSystemProvider = {};
try {
  Object.setPrototypeOf(fileSystemProvider, chrome.fileSystemProvider);
} catch (e) {}
fileSystemProvider.mount = function mount(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fileSystemProvider.mount.apply(null, args);
  });
};
fileSystemProvider.unmount = function unmount(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fileSystemProvider.unmount.apply(null, args);
  });
};
fileSystemProvider.getAll = function getAll(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fileSystemProvider.getAll.apply(null, args);
  });
};
fileSystemProvider.get = function get(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fileSystemProvider.get.apply(null, args);
  });
};
fileSystemProvider.notify = function notify(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fileSystemProvider.notify.apply(null, args);
  });
};
var fontSettings = module.exports.fontSettings = {};
try {
  Object.setPrototypeOf(fontSettings, chrome.fontSettings);
} catch (e) {}
fontSettings.setDefaultFontSize = function setDefaultFontSize(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fontSettings.setDefaultFontSize.apply(null, args);
  });
};
fontSettings.getFont = function getFont(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fontSettings.getFont.apply(null, args);
  });
};
fontSettings.getDefaultFontSize = function getDefaultFontSize(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fontSettings.getDefaultFontSize.apply(null, args);
  });
};
fontSettings.getMinimumFontSize = function getMinimumFontSize(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fontSettings.getMinimumFontSize.apply(null, args);
  });
};
fontSettings.setMinimumFontSize = function setMinimumFontSize(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fontSettings.setMinimumFontSize.apply(null, args);
  });
};
fontSettings.getDefaultFixedFontSize = function getDefaultFixedFontSize(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fontSettings.getDefaultFixedFontSize.apply(null, args);
  });
};
fontSettings.clearDefaultFontSize = function clearDefaultFontSize(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fontSettings.clearDefaultFontSize.apply(null, args);
  });
};
fontSettings.setDefaultFixedFontSize = function setDefaultFixedFontSize(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fontSettings.setDefaultFixedFontSize.apply(null, args);
  });
};
fontSettings.clearFont = function clearFont(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fontSettings.clearFont.apply(null, args);
  });
};
fontSettings.setFont = function setFont(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fontSettings.setFont.apply(null, args);
  });
};
fontSettings.clearMinimumFontSize = function clearMinimumFontSize(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fontSettings.clearMinimumFontSize.apply(null, args);
  });
};
fontSettings.getFontList = function getFontList(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fontSettings.getFontList.apply(null, args);
  });
};
fontSettings.clearDefaultFixedFontSize = function clearDefaultFixedFontSize(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.fontSettings.clearDefaultFixedFontSize.apply(null, args);
  });
};
var gcm = module.exports.gcm = {};
try {
  Object.setPrototypeOf(gcm, chrome.gcm);
} catch (e) {}
gcm.register = function register(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.gcm.register.apply(null, args);
  });
};
gcm.unregister = function unregister(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.gcm.unregister.apply(null, args);
  });
};
gcm.send = function send(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.gcm.send.apply(null, args);
  });
};
var history = module.exports.history = {};
try {
  Object.setPrototypeOf(history, chrome.history);
} catch (e) {}
history.search = function search(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.history.search.apply(null, args);
  });
};
history.addUrl = function addUrl(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.history.addUrl.apply(null, args);
  });
};
history.deleteRange = function deleteRange(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.history.deleteRange.apply(null, args);
  });
};
history.deleteAll = function deleteAll(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.history.deleteAll.apply(null, args);
  });
};
history.getVisits = function getVisits(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.history.getVisits.apply(null, args);
  });
};
history.deleteUrl = function deleteUrl(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.history.deleteUrl.apply(null, args);
  });
};
var i18n = module.exports.i18n = {};
try {
  Object.setPrototypeOf(i18n, chrome.i18n);
} catch (e) {}
i18n.getAcceptLanguages = function getAcceptLanguages(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.i18n.getAcceptLanguages.apply(null, args);
  });
};
var identity = module.exports.identity = {};
try {
  Object.setPrototypeOf(identity, chrome.identity);
} catch (e) {}
identity.getAccounts = function getAccounts(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.identity.getAccounts.apply(null, args);
  });
};
identity.getAuthToken = function getAuthToken(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.identity.getAuthToken.apply(null, args);
  });
};
identity.getProfileUserInfo = function getProfileUserInfo(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.identity.getProfileUserInfo.apply(null, args);
  });
};
identity.removeCachedAuthToken = function removeCachedAuthToken(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.identity.removeCachedAuthToken.apply(null, args);
  });
};
identity.launchWebAuthFlow = function launchWebAuthFlow(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.identity.launchWebAuthFlow.apply(null, args);
  });
};
var idle = module.exports.idle = {};
try {
  Object.setPrototypeOf(idle, chrome.idle);
} catch (e) {}
idle.queryState = function queryState(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.idle.queryState.apply(null, args);
  });
};
var input = module.exports.input = {};
try {
  Object.setPrototypeOf(input, chrome.input);
} catch (e) {}
input.ime = {};
try {
  Object.setPrototypeOf(input.ime, chrome.input.ime);
} catch (e) {}
input.ime.setMenuItems = function setMenuItems(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.input.ime.setMenuItems.apply(null, args);
  });
};
input.ime.commitText = function commitText(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.input.ime.commitText.apply(null, args);
  });
};
input.ime.setCandidates = function setCandidates(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.input.ime.setCandidates.apply(null, args);
  });
};
input.ime.setComposition = function setComposition(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.input.ime.setComposition.apply(null, args);
  });
};
input.ime.updateMenuItems = function updateMenuItems(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.input.ime.updateMenuItems.apply(null, args);
  });
};
input.ime.setCandidateWindowProperties = function setCandidateWindowProperties(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.input.ime.setCandidateWindowProperties.apply(null, args);
  });
};
input.ime.clearComposition = function clearComposition(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.input.ime.clearComposition.apply(null, args);
  });
};
input.ime.setCursorPosition = function setCursorPosition(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.input.ime.setCursorPosition.apply(null, args);
  });
};
input.ime.sendKeyEvents = function sendKeyEvents(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.input.ime.sendKeyEvents.apply(null, args);
  });
};
input.ime.deleteSurroundingText = function deleteSurroundingText(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.input.ime.deleteSurroundingText.apply(null, args);
  });
};
var management = module.exports.management = {};
try {
  Object.setPrototypeOf(management, chrome.management);
} catch (e) {}
management.setEnabled = function setEnabled(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.setEnabled.apply(null, args);
  });
};
management.getPermissionWarningsById = function getPermissionWarningsById(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.getPermissionWarningsById.apply(null, args);
  });
};
management.get = function get(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.get.apply(null, args);
  });
};
management.getAll = function getAll(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.getAll.apply(null, args);
  });
};
management.getPermissionWarningsByManifest = function getPermissionWarningsByManifest(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.getPermissionWarningsByManifest.apply(null, args);
  });
};
management.launchApp = function launchApp(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.launchApp.apply(null, args);
  });
};
management.uninstall = function uninstall(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.uninstall.apply(null, args);
  });
};
management.uninstall = function uninstall(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.uninstall.apply(null, args);
  });
};
management.getSelf = function getSelf(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.getSelf.apply(null, args);
  });
};
management.uninstallSelf = function uninstallSelf(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.uninstallSelf.apply(null, args);
  });
};
management.uninstallSelf = function uninstallSelf(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.uninstallSelf.apply(null, args);
  });
};
management.createAppShortcut = function createAppShortcut(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.createAppShortcut.apply(null, args);
  });
};
management.setLaunchType = function setLaunchType(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.setLaunchType.apply(null, args);
  });
};
management.generateAppForLink = function generateAppForLink(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.management.generateAppForLink.apply(null, args);
  });
};
var networking = module.exports.networking = {};
try {
  Object.setPrototypeOf(networking, chrome.networking);
} catch (e) {}
networking.config = {};
try {
  Object.setPrototypeOf(networking.config, chrome.networking.config);
} catch (e) {}
networking.config.setNetworkFilter = function setNetworkFilter(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.networking.config.setNetworkFilter.apply(null, args);
  });
};
networking.config.finishAuthentication = function finishAuthentication(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.networking.config.finishAuthentication.apply(null, args);
  });
};
var notifications = module.exports.notifications = {};
try {
  Object.setPrototypeOf(notifications, chrome.notifications);
} catch (e) {}
notifications.create = function create(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.notifications.create.apply(null, args);
  });
};
notifications.create = function create(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.notifications.create.apply(null, args);
  });
};
notifications.update = function update(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.notifications.update.apply(null, args);
  });
};
notifications.clear = function clear(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.notifications.clear.apply(null, args);
  });
};
notifications.getAll = function getAll(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.notifications.getAll.apply(null, args);
  });
};
notifications.getPermissionLevel = function getPermissionLevel(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.notifications.getPermissionLevel.apply(null, args);
  });
};
var omnibox = module.exports.omnibox = {};
try {
  Object.setPrototypeOf(omnibox, chrome.omnibox);
} catch (e) {}
var pageAction = module.exports.pageAction = {};
try {
  Object.setPrototypeOf(pageAction, chrome.pageAction);
} catch (e) {}
pageAction.getTitle = function getTitle(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.pageAction.getTitle.apply(null, args);
  });
};
pageAction.getPopup = function getPopup(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.pageAction.getPopup.apply(null, args);
  });
};
pageAction.setIcon = function setIcon(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.pageAction.setIcon.apply(null, args);
  });
};
var pageCapture = module.exports.pageCapture = {};
try {
  Object.setPrototypeOf(pageCapture, chrome.pageCapture);
} catch (e) {}
pageCapture.saveAsMHTML = function saveAsMHTML(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.pageCapture.saveAsMHTML.apply(null, args);
  });
};
var permissions = module.exports.permissions = {};
try {
  Object.setPrototypeOf(permissions, chrome.permissions);
} catch (e) {}
permissions.contains = function contains(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.permissions.contains.apply(null, args);
  });
};
permissions.getAll = function getAll(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.permissions.getAll.apply(null, args);
  });
};
permissions.request = function request(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.permissions.request.apply(null, args);
  });
};
permissions.remove = function remove(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.permissions.remove.apply(null, args);
  });
};
var platformKeys = module.exports.platformKeys = {};
try {
  Object.setPrototypeOf(platformKeys, chrome.platformKeys);
} catch (e) {}
platformKeys.selectClientCertificates = function selectClientCertificates(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.platformKeys.selectClientCertificates.apply(null, args);
  });
};
platformKeys.getKeyPair = function getKeyPair(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.platformKeys.getKeyPair.apply(null, args);
  });
};
platformKeys.verifyTLSServerCertificate = function verifyTLSServerCertificate(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.platformKeys.verifyTLSServerCertificate.apply(null, args);
  });
};
var power = module.exports.power = {};
try {
  Object.setPrototypeOf(power, chrome.power);
} catch (e) {}
var printerProvider = module.exports.printerProvider = {};
try {
  Object.setPrototypeOf(printerProvider, chrome.printerProvider);
} catch (e) {}
var privacy = module.exports.privacy = {};
try {
  Object.setPrototypeOf(privacy, chrome.privacy);
} catch (e) {}
var proxy = module.exports.proxy = {};
try {
  Object.setPrototypeOf(proxy, chrome.proxy);
} catch (e) {}
var runtime = module.exports.runtime = {};
try {
  Object.setPrototypeOf(runtime, chrome.runtime);
} catch (e) {}
runtime.getBackgroundPage = function getBackgroundPage(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.runtime.getBackgroundPage.apply(null, args);
  });
};
runtime.getPackageDirectoryEntry = function getPackageDirectoryEntry(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.runtime.getPackageDirectoryEntry.apply(null, args);
  });
};
runtime.getPlatformInfo = function getPlatformInfo(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.runtime.getPlatformInfo.apply(null, args);
  });
};
runtime.requestUpdateCheck = function requestUpdateCheck(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.runtime.requestUpdateCheck.apply(null, args);
  });
};
runtime.sendMessage = function sendMessage(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.runtime.sendMessage.apply(null, args);
  });
};
runtime.sendMessage = function sendMessage(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.runtime.sendMessage.apply(null, args);
  });
};
runtime.sendMessage = function sendMessage(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.runtime.sendMessage.apply(null, args);
  });
};
runtime.sendMessage = function sendMessage(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.runtime.sendMessage.apply(null, args);
  });
};
runtime.sendNativeMessage = function sendNativeMessage(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.runtime.sendNativeMessage.apply(null, args);
  });
};
runtime.setUninstallURL = function setUninstallURL(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.runtime.setUninstallURL.apply(null, args);
  });
};
runtime.openOptionsPage = function openOptionsPage(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.runtime.openOptionsPage.apply(null, args);
  });
};
var scriptBadge = module.exports.scriptBadge = {};
try {
  Object.setPrototypeOf(scriptBadge, chrome.scriptBadge);
} catch (e) {}
scriptBadge.getPopup = function getPopup(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.scriptBadge.getPopup.apply(null, args);
  });
};
var sessions = module.exports.sessions = {};
try {
  Object.setPrototypeOf(sessions, chrome.sessions);
} catch (e) {}
sessions.getRecentlyClosed = function getRecentlyClosed(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.sessions.getRecentlyClosed.apply(null, args);
  });
};
sessions.getRecentlyClosed = function getRecentlyClosed(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.sessions.getRecentlyClosed.apply(null, args);
  });
};
sessions.getDevices = function getDevices(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.sessions.getDevices.apply(null, args);
  });
};
sessions.getDevices = function getDevices(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.sessions.getDevices.apply(null, args);
  });
};
sessions.restore = function restore(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.sessions.restore.apply(null, args);
  });
};
var storage = module.exports.storage = {};
try {
  Object.setPrototypeOf(storage, chrome.storage);
} catch (e) {}
var socket = module.exports.socket = {};
try {
  Object.setPrototypeOf(socket, chrome.socket);
} catch (e) {}
socket.create = function create(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.socket.create.apply(null, args);
  });
};
socket.connect = function connect(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.socket.connect.apply(null, args);
  });
};
socket.bind = function bind(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.socket.bind.apply(null, args);
  });
};
socket.read = function read(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.socket.read.apply(null, args);
  });
};
socket.write = function write(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.socket.write.apply(null, args);
  });
};
socket.recvFrom = function recvFrom(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.socket.recvFrom.apply(null, args);
  });
};
socket.sendTo = function sendTo(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.socket.sendTo.apply(null, args);
  });
};
socket.listen = function listen(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.socket.listen.apply(null, args);
  });
};
socket.accept = function accept(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.socket.accept.apply(null, args);
  });
};
socket.setKeepAlive = function setKeepAlive(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.socket.setKeepAlive.apply(null, args);
  });
};
socket.setNoDelay = function setNoDelay(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.socket.setNoDelay.apply(null, args);
  });
};
socket.getInfo = function getInfo(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.socket.getInfo.apply(null, args);
  });
};
socket.getNetworkList = function getNetworkList(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.socket.getNetworkList.apply(null, args);
  });
};
var system = module.exports.system = {};
try {
  Object.setPrototypeOf(system, chrome.system);
} catch (e) {}
system.cpu = {};
try {
  Object.setPrototypeOf(system.cpu, chrome.system.cpu);
} catch (e) {}
system.cpu.getInfo = function getInfo(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.system.cpu.getInfo.apply(null, args);
  });
};
system.memory = {};
try {
  Object.setPrototypeOf(system.memory, chrome.system.memory);
} catch (e) {}
system.memory.getInfo = function getInfo(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.system.memory.getInfo.apply(null, args);
  });
};
system.storage = {};
try {
  Object.setPrototypeOf(system.storage, chrome.system.storage);
} catch (e) {}
system.storage.getInfo = function getInfo(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.system.storage.getInfo.apply(null, args);
  });
};
system.storage.ejectDevice = function ejectDevice(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.system.storage.ejectDevice.apply(null, args);
  });
};
system.storage.getAvailableCapacity = function getAvailableCapacity(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.system.storage.getAvailableCapacity.apply(null, args);
  });
};
var tabCapture = module.exports.tabCapture = {};
try {
  Object.setPrototypeOf(tabCapture, chrome.tabCapture);
} catch (e) {}
tabCapture.capture = function capture(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabCapture.capture.apply(null, args);
  });
};
tabCapture.getCapturedTabs = function getCapturedTabs(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabCapture.getCapturedTabs.apply(null, args);
  });
};
var tabs = module.exports.tabs = {};
try {
  Object.setPrototypeOf(tabs, chrome.tabs);
} catch (e) {}
tabs.executeScript = function executeScript(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.executeScript.apply(null, args);
  });
};
tabs.executeScript = function executeScript(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.executeScript.apply(null, args);
  });
};
tabs.get = function get(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.get.apply(null, args);
  });
};
tabs.getAllInWindow = function getAllInWindow(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.getAllInWindow.apply(null, args);
  });
};
tabs.getAllInWindow = function getAllInWindow(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.getAllInWindow.apply(null, args);
  });
};
tabs.getCurrent = function getCurrent(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.getCurrent.apply(null, args);
  });
};
tabs.getSelected = function getSelected(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.getSelected.apply(null, args);
  });
};
tabs.getSelected = function getSelected(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.getSelected.apply(null, args);
  });
};
tabs.create = function create(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.create.apply(null, args);
  });
};
tabs.move = function move(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.move.apply(null, args);
  });
};
tabs.move = function move(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.move.apply(null, args);
  });
};
tabs.update = function update(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.update.apply(null, args);
  });
};
tabs.update = function update(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.update.apply(null, args);
  });
};
tabs.remove = function remove(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.remove.apply(null, args);
  });
};
tabs.remove = function remove(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.remove.apply(null, args);
  });
};
tabs.captureVisibleTab = function captureVisibleTab(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.captureVisibleTab.apply(null, args);
  });
};
tabs.captureVisibleTab = function captureVisibleTab(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.captureVisibleTab.apply(null, args);
  });
};
tabs.captureVisibleTab = function captureVisibleTab(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.captureVisibleTab.apply(null, args);
  });
};
tabs.captureVisibleTab = function captureVisibleTab(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.captureVisibleTab.apply(null, args);
  });
};
tabs.reload = function reload(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.reload.apply(null, args);
  });
};
tabs.reload = function reload(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.reload.apply(null, args);
  });
};
tabs.reload = function reload(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.reload.apply(null, args);
  });
};
tabs.duplicate = function duplicate(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.duplicate.apply(null, args);
  });
};
tabs.sendMessage = function sendMessage(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.sendMessage.apply(null, args);
  });
};
tabs.sendMessage = function sendMessage(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.sendMessage.apply(null, args);
  });
};
tabs.sendRequest = function sendRequest(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.sendRequest.apply(null, args);
  });
};
tabs.insertCSS = function insertCSS(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.insertCSS.apply(null, args);
  });
};
tabs.insertCSS = function insertCSS(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.insertCSS.apply(null, args);
  });
};
tabs.highlight = function highlight(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.highlight.apply(null, args);
  });
};
tabs.query = function query(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.query.apply(null, args);
  });
};
tabs.detectLanguage = function detectLanguage(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.detectLanguage.apply(null, args);
  });
};
tabs.detectLanguage = function detectLanguage(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.detectLanguage.apply(null, args);
  });
};
tabs.setZoom = function setZoom(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.setZoom.apply(null, args);
  });
};
tabs.setZoom = function setZoom(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.setZoom.apply(null, args);
  });
};
tabs.getZoom = function getZoom(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.getZoom.apply(null, args);
  });
};
tabs.getZoom = function getZoom(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.getZoom.apply(null, args);
  });
};
tabs.setZoomSettings = function setZoomSettings(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.setZoomSettings.apply(null, args);
  });
};
tabs.setZoomSettings = function setZoomSettings(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.setZoomSettings.apply(null, args);
  });
};
tabs.getZoomSettings = function getZoomSettings(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.getZoomSettings.apply(null, args);
  });
};
tabs.getZoomSettings = function getZoomSettings(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tabs.getZoomSettings.apply(null, args);
  });
};
var topSites = module.exports.topSites = {};
try {
  Object.setPrototypeOf(topSites, chrome.topSites);
} catch (e) {}
topSites.get = function get(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.topSites.get.apply(null, args);
  });
};
var tts = module.exports.tts = {};
try {
  Object.setPrototypeOf(tts, chrome.tts);
} catch (e) {}
tts.isSpeaking = function isSpeaking(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tts.isSpeaking.apply(null, args);
  });
};
tts.getVoices = function getVoices(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tts.getVoices.apply(null, args);
  });
};
tts.speak = function speak(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tts.speak.apply(null, args);
  });
};
tts.speak = function speak(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.tts.speak.apply(null, args);
  });
};
var ttsEngine = module.exports.ttsEngine = {};
try {
  Object.setPrototypeOf(ttsEngine, chrome.ttsEngine);
} catch (e) {}
var types = module.exports.types = {};
try {
  Object.setPrototypeOf(types, chrome.types);
} catch (e) {}
var vpnProvider = module.exports.vpnProvider = {};
try {
  Object.setPrototypeOf(vpnProvider, chrome.vpnProvider);
} catch (e) {}
vpnProvider.createConfig = function createConfig(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.vpnProvider.createConfig.apply(null, args);
  });
};
vpnProvider.destroyConfig = function destroyConfig(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.vpnProvider.destroyConfig.apply(null, args);
  });
};
vpnProvider.setParameters = function setParameters(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.vpnProvider.setParameters.apply(null, args);
  });
};
vpnProvider.sendPacket = function sendPacket(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.vpnProvider.sendPacket.apply(null, args);
  });
};
vpnProvider.notifyConnectionStateChanged = function notifyConnectionStateChanged(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.vpnProvider.notifyConnectionStateChanged.apply(null, args);
  });
};
var wallpaper = module.exports.wallpaper = {};
try {
  Object.setPrototypeOf(wallpaper, chrome.wallpaper);
} catch (e) {}
wallpaper.setWallpaper = function setWallpaper(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.wallpaper.setWallpaper.apply(null, args);
  });
};
var webNavigation = module.exports.webNavigation = {};
try {
  Object.setPrototypeOf(webNavigation, chrome.webNavigation);
} catch (e) {}
webNavigation.getFrame = function getFrame(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.webNavigation.getFrame.apply(null, args);
  });
};
webNavigation.getAllFrames = function getAllFrames(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.webNavigation.getAllFrames.apply(null, args);
  });
};
var webRequest = module.exports.webRequest = {};
try {
  Object.setPrototypeOf(webRequest, chrome.webRequest);
} catch (e) {}
webRequest.handlerBehaviorChanged = function handlerBehaviorChanged(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.webRequest.handlerBehaviorChanged.apply(null, args);
  });
};
var webstore = module.exports.webstore = {};
try {
  Object.setPrototypeOf(webstore, chrome.webstore);
} catch (e) {}
webstore.install = function install(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.webstore.install.apply(null, args);
  });
};
var windows = module.exports.windows = {};
try {
  Object.setPrototypeOf(windows, chrome.windows);
} catch (e) {}
windows.get = function get(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.windows.get.apply(null, args);
  });
};
windows.get = function get(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.windows.get.apply(null, args);
  });
};
windows.getCurrent = function getCurrent(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.windows.getCurrent.apply(null, args);
  });
};
windows.getCurrent = function getCurrent(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.windows.getCurrent.apply(null, args);
  });
};
windows.create = function create(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.windows.create.apply(null, args);
  });
};
windows.create = function create(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.windows.create.apply(null, args);
  });
};
windows.getAll = function getAll(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.windows.getAll.apply(null, args);
  });
};
windows.getAll = function getAll(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.windows.getAll.apply(null, args);
  });
};
windows.update = function update(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.windows.update.apply(null, args);
  });
};
windows.remove = function remove(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.windows.remove.apply(null, args);
  });
};
windows.getLastFocused = function getLastFocused(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.windows.getLastFocused.apply(null, args);
  });
};
windows.getLastFocused = function getLastFocused(...args) {
  return new Promise(function(resolve, reject) {
    args.push(function(...asyncReturns) {
      if (asyncReturns.length === 1) {
        resolve(asyncReturns[0])
      } else {
        resolve(asyncReturns);
      }
    });
    chrome.windows.getLastFocused.apply(null, args);
  });
};
