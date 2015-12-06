// Inject the new content
function injectHtml () {
  if (window.localStorage['embedlyContent'] !== '') {
    var content = JSON.parse(window.localStorage['embedlyContent']);
    $('title').html(content.title);
    var html = '<h1>' + content.title + '</h1>';
    html += content.content; 
    $('#beautified').html(html);
    var allImages = $('img');
    var contentWidth = 700;
    allImages.on('load', function() {
      for (var i = 0; i < allImages.length; i++) {
        var image = allImages[i];
        var imageWidth = image.clientWidth;
        var imageWidthFinal = ( (imageWidth-contentWidth) /2) + "px";
        // $(image).css({'right': imageWidthFinal});
        image.style.right = imageWidthFinal;
      }

    });   
  }
}

$('.medium-styles').on('click', function() {
  if ( $('link')[1].getAttribute('href') === "styles.css" ) {

  } else {
    $('link')[1].remove();
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", 'styles.css');
    document.getElementsByTagName("head")[0].appendChild(fileref);
  }
});

$('.fb-styles').on('click', function() {

  if ( $('link')[1].getAttribute('href') === "styles2.css" ) {

  } else {
    $('link')[1].remove();
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", 'styles2.css');
    document.getElementsByTagName("head")[0].appendChild(fileref);
  }
});

$('.grantland-styles').on('click', function() {

  if ( $('link')[1].getAttribute('href') === "styles3.css" ) {

  } else {
    $('link')[1].remove();
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", 'styles3.css');
    document.getElementsByTagName("head")[0].appendChild(fileref);
  }
});

// Listens for messages
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // When the 'on_new_tab' is received
  if ( request.message === 'on_new_tab' ) {
    // Saves to local storage for refresh
    window.localStorage['embedlyContent'] = request.content;
    // Inject the new content
    injectHtml();
  }
});

injectHtml();

// Listens for messages (Having request in load.js instead of background.js)
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   // When the 'on_new_tab' is received
//   if ( request.message === 'on_new_tab' ) {
//     // Make a request to the Embedly Extract API
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://api.embed.ly/1/extract?key=' + request.key + '&url=' + request.url, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.onload = function() { 
//       // Inject the new content
//       var content = JSON.parse(xhr.responseText);
//       $('title').html(content.title);
//       var html = '<h1>' + content.title + '</h1>';
//       html += content.content; 
//       $('#beautified').html(html);
//       var allImages = $('img');
//       var contentWidth = 700;
//       allImages.on('load', function() {
//         for (var i = 0; i < allImages.length; i++) {
//           var image = allImages[i];
//           var imageWidth = image.clientWidth;
//           var imageWidthFinal = ( (imageWidth-contentWidth) /2) + "px";
//           // $(image).css({'right': imageWidthFinal});
//           image.style.right = imageWidthFinal;
//         }

//       });
//     };
//     xhr.send();
//   }
// });
