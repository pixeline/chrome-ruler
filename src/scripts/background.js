'use strict';

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.insertCSS({
    file: 'styles/main.css'
  });

  chrome.tabs.executeScript({
    file: 'scripts/bundle.js'
  });
});
