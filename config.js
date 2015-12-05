// get config value for key
function get_config(key) {
//    console.debug("get_config", key);

    // is config initialized?
    if (localStorage.init == undefined)
        // _init_config();

    var s = localStorage.c || '""';
    var c = JSON.parse(s);
    return c[key];
}