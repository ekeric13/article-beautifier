chrome.browserAction.onClicked.addListener(function(tab) {
    // start viewer tab
    console.log(tab, 'here second');
    chrome.tabs.sendMessage(tab.id, {"message": "clicked_browser_action", "tabId" : tab.id });
    // var url = chrome.extension.getURL('index.html#'+tab.id);
    // console.log(window.location.href)
    
    // chrome.tabs.create({url:url});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log('here fourth');
    if( request.message === "open_new_tab" ) {
      console.log(request.dom);
      // window.localStorage[ request.tabId ] = request.href;
      var url = chrome.extension.getURL('index.html#'+ request.tabId);
      chrome.tabs.create({url:url});
      // chrome.tabs.create({"url": request.url});
    }
  }
);

// function tab_updated(id) {
//     console.log('active tab: '+id);

//     // if (!get_config("tooltip"))
//     //     return;

//     // ask url
//     chrome.tabs.get(id, function(tab) {
//         if (tab.url && !tab.url.startsWith("chrome")) {
//             // ask counts from content script
//             chrome.tabs.sendMessage(id, {}, function(reply){
//                 // update_badge(reply);
//             });
//         } else {
//             // no reply from content script
//             // chrome.browserAction.setBadgeText({"text":""});
//         }
//     });
// }

// tab activity - update badge
// chrome.tabs.onActivated.addListener(function(tab){
//     var id = tab.tabId;
//     tab_updated(id);
// });
// chrome.tabs.onUpdated.addListener(function(tabid, info){
//     if (info.status == "complete")
//         tab_updated(tabid);
// });
