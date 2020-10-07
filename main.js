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
        document.getElementById('main').innerHTML = "";
        componentHandler.upgradeElement(document.getElementById('main'))
        document.getElementById('main').innerHTML = xmlhttp.responseText;
        componentHandler.upgradeElement(document.getElementById('main'))
    }
}
if ((location + "").match("index.html") == "index.html") {
    history.back();
}