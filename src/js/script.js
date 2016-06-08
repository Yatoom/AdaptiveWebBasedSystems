function show(elem, bool) {
    if (bool) {
        $(elem.getElementsByTagName('ul')[0]).show();
    }
}

function hide(elem, bool) {
    if (bool) {
        $(elem.getElementsByTagName('ul')[0]).hide();
    }
}
