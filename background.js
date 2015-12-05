var key = keys.embedlyKey;
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
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // When the 'open_new_tab' is received
    if ( request.message === "open_new_tab" ) {

      // Grab information from Embedly API
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://api.embed.ly/1/extract?key=' + key + '&url=' + request.url, true);
      xhr.setRequestHeader("Content-Type","application/json");
      xhr.onload = function() { 
          
        // Sets the response from API to local storage
        window.localStorage[ 'parsedData' ] = xhr.responseText;

        var url = chrome.extension.getURL('index.html#'+ request.tabId);
        chrome.tabs.create({
          'url': url
        }, function (tab) {
          // Get information from API
          console.log(tab);
          console.log(request);
          // Need to get active tab to send to the correct one
          chrome.tabs.sendMessage(tab.id, {
            'message': 'parsed_url_contents',
            'tabId': request.tabId,
            'url': request.url
          }); 
        });
      }
      xhr.send();
    }
  }
);
