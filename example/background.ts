// Based on https://developer.chrome.com/extensions/examples/api/i18n/cld/background.js
// Copyright (c) 2009 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as browser from 'index';

var selectedId = -1;
async function refreshLanguage() {
  let language = await browser.tabs.detectLanguage();
  console.log(language);
  if (language == " invalid_language_code")
    language = "???";
  browser.browserAction.setBadgeText({"text": language, tabId: selectedId});
}

browser.tabs.onUpdated.addListener(function(tabId, props) {
  if (props.status == "complete" && tabId == selectedId)
    refreshLanguage();
});

browser.tabs.onActivated.addListener(function(activeInfo) {
  selectedId = activeInfo.tabId;
  refreshLanguage();
});

(async function() {
  const tabs = await browser.tabs.query({active: true, currentWindow: true});
  selectedId = tabs[0].id;
  refreshLanguage();
})();
