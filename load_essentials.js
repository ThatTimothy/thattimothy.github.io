let loaded = 0;
const toLoad = 3;
const baseDomain = isProd() ? window.location.origin : window.location.origin + "/src";

let headerData;
let footerData;

function isProd() {
    return window.location.hostname != "127.0.0.1" && window.location.hostname != "localhost"
}

function allLoaded() {
    document.body.parentElement.style.width = "100%";
    document.body.parentElement.style.height = "100%";

    document.body.style.position = "relative";
    document.body.style.minWidth = "100%";
    document.body.style.minHeight = "100%";
    document.body.style.maxHeight = "100%";

    document.body.style.display = "grid"
    document.body.style.gridTemplateRows = "auto 1fr"
    document.body.style.overflowY = "hidden"

    let site_container = document.getElementById('site_container')
    site_container.style.overflowY = "auto"

    let site_container_container = document.getElementById('site_container_container')
    site_container_container.style.display = "flex"
    site_container_container.style.flexDirection = "column"
    site_container_container.style.minHeight = "100%"

    document.getElementById('body').style.flexGrow = 1;

    let header = document.getElementById("header");
    header.innerHTML = headerData;
    let footer = document.getElementById("footer");
    footer.innerHTML = footerData;

    footer.style = "padding: 0px; margin: 0px;"
    footer.style.paddingTop = "20px"

    let footer_contents = footer.querySelector('#footer_contents').querySelector('#footer_contents_container')

    footer_contents.animate([
        {
            opacity: 0,
            transform: 'translate(-50%, 100%)',
        },
        {
            opacity: 1,
            transform: 'translate(-50%, 0%)',
        },
    ], {
        duration: 250,
        iterations: 1,
        fill: 'forwards'
    })
}

fetch(baseDomain + '/header.html').then(function (response) {
    response.text().then(function (text) {
        headerData = text;

        loaded++;
        if (loaded == toLoad) {
            allLoaded();
        }
    });
});

fetch(baseDomain + '/footer.html').then(function (response) {
    response.text().then(function (text) {
        footerData = text;

        loaded++;
        if (loaded == toLoad) {
            allLoaded();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    loaded++;
    if (loaded == toLoad) {
        allLoaded();
    }
});