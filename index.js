// Listens for messages
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // When the 'on_new_tab' is received
  if ( request.message === 'on_new_tab' ) {
    // Make a request to the Embedly Extract API
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.embed.ly/1/extract?key=' + request.key + '&url=' + request.url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() { 
      // Inject the new content
      var content = JSON.parse(xhr.responseText);
      $('title').html(content.title);
      var html = '<h1>' + content.title + '</h1>';
      html += content.content; 
      $('#beautified').html(html);
    };
    xhr.send();
  }
});