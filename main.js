var xmlhttp;
function setUrl(urlstr) {
    var url = "" + urlstr;
    history.pushState({ url: url, title: document.title }, document.title, url);
}
function loadContent(urlstr) {
    var url = "" + urlstr;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = contentLoaded;
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}
function contentLoaded() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        /*document.getElementById('main').innerHTML = null;*/
        document.write(<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>'')
        document.getElementById('head').innerHTML = xmlhttp.responseText;
        /*document.getElementById('head').innerHTML = document.getElementById('head').innerHTML + ('<scr' + 'ipt defer src="https://code.getmdl.io/1.3.0/material.min.js"></scr' + 'ipt>');*/
    }
}
if ((location + "").match("index.html") == "index.html") {
    history.back();
}