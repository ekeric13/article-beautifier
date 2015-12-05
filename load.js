console.log("here first");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // if ( request.message === "clicked_browser_action" ) {
      window.localStorage[request.tabId] = window.location.href;
      console.log('here third', window.localStorage[request.tabId]);
      var dom = buildDom();
      chrome.runtime.sendMessage({"message": "open_new_tab", "dom": dom, "tabId" : request.tabId, 'href': window.location.href });
    // }
  }
);

function buildDom() {
  return ["future dom array"];
}

// var dom = buildDom();
// console.log(dom, chrome.runtime);
// chrome.runtime.sendMessage({"message": "open_new_tab", "dom": dom});
