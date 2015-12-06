function ask_page_data() {
  var tabid = location.hash.slice(1);
  tabid = parseInt(tabid);
  var content = JSON.parse(window.localStorage['parsedData']);
  console.log(content);

  $('title').html(content.title);
  // var html = '<!DOCTYPE html><html><head><title>' + content.title + '</title>' + '<meta charset="utf-8">' + '</head><body>';
  var html = '<h1>' + content.title + '</h1>';
  html += content.content; 
  // html += '</body></html>';
  $('#parsed').html(html);
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

ask_page_data();


// function data_received(resp) {
//   var url = remove_url_prefix(resp.url);
//   $(document.body).append('<div>'+url+"</div>");
// }

// function remove_url_prefix(url) {
//   if (url.startsWith("http://"))
//       url = url.substr(7);
//   else if (url.startsWith("https://"))
//       url = url.substr(8);
//   return url;
// }