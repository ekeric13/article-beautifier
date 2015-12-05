console.log('Chome Extension started!', window.location.href);

// Listens for messages
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // When the 'clicked_browser_action' is received
    if ( request.message === 'clicked_browser_action' ) {
      // Sends a message 'open_new_tab'
      chrome.runtime.sendMessage({
        'message': 'open_new_tab', 
        'tabId': request.tabId,
        'url': window.location.href 
      });
    } else if ( request.message === 'parsed_url_contents' ) {
      console.log('DEBUG: parsed_url_contents');
      console.log('parsed_url_contents');
      console.log(request.tabId);
      console.log(request.url);
    }

  }
);
