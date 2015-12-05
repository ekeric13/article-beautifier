function ask_page_data() {
  var key = 'ef2e038a54184a57a182c1ed5b38fa33';
  var tabid = location.hash.slice(1);
  tabid = parseInt(tabid);
  var content = JSON.parse(window.localStorage['parsedData']);

  $('title').html(content.title);
  // var html = '<!DOCTYPE html><html><head><title>' + content.title + '</title>' + '<meta charset="utf-8">' + '</head><body>';
  var html = '<h1>' + content.title + '</h1>';
  html += content.content; 
  // html += '</body></html>';
  $('#parsed').html(html);
}

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