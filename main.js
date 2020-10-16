var xmlhttp,xmlstr;
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
        document.getElementById('main').innerHTML = xmlhttp.responseText;
        componentHandler.upgradeElements(document.getElementById('main'));
    }
}
function loadStr(urlstr,f) {
    var url = "" + urlstr;
    xmlstr = new XMLHttpRequest();
    xmlstr.onreadystatechange = function () {
        if (xmlstr.readyState == 4 && xmlstr.status == 200) {
            f(xmlhttp.responseText + "");
        }
    };
    xmlstr.open("GET", url, true);
    xmlstr.send(null);
}
if ((location + "").match("index.html") == "index.html") {
    history.back();
}