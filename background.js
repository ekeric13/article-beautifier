// When the browser action button is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
  // Looks for the active tab in the current window
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    // Sends a message 'clicked_browser_action' to the active tab
    chrome.tabs.sendMessage(activeTab.id, {
      'message': 'clicked_browser_action',
      'tabId': activeTab.id
    });
  });
});

// Listens for messages
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
  // When the 'open_new_tab' is received
  if ( request.message === 'open_new_tab' ) {
    // Creates a url for the new tab and opens it in the new tab
    var url = chrome.extension.getURL('index.html#'+ request.tabId);
    chrome.tabs.create({
      'url': url
    }, function (tab) {
      // Sends a message 'clicked_browser_action' to the new tab with url to parse
      chrome.tabs.sendMessage(tab.id, {
        'message': 'on_new_tab',
        'tabId': request.tabId,
        'url': request.url,
        'key': keys.embedlyKey
      });
    });
  }
});
