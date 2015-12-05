function ask_page_data() {
    // call content script: ask js+css nodes
    $(document.body).append('<div>eric</div>');
    if (window.chrome && chrome.tabs) {
        var tabid = location.hash.slice(1);
        tabid = parseInt(tabid);
        console.log(window.localStorage);
        var url = window.localStorage[tabid];
        $(document.body).append('<div>'+url+'</div>');

        // ask to return onclick handlers too?
        // var show_onclick = get_config("onclick");
        // chrome.tabs.sendMessage(tabid, {"showonclick":show_onclick},
        //                         data_received);
    } else {
        // while developing
        data_received(debugdata);
    }
}

ask_page_data();

function data_received(resp) {
    var url = remove_url_prefix(resp.url);
    $(document.body).append('<div>'+url+"</div>");
}

function remove_url_prefix(url) {
    if (url.startsWith("http://"))
        url = url.substr(7);
    else if (url.startsWith("https://"))
        url = url.substr(8);
    return url;
}