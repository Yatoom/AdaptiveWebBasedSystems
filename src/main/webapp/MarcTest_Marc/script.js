function show(elem, bool) {
    if (bool) {
        $(elem.getElementsByTagName('ul')[0]).show();
    }
    $(elem).addClass('highlight');
}

function hide(elem, bool) {
    if (bool) {
        $(elem.getElementsByTagName('ul')[0]).hide();
    }
    $(elem).removeClass('highlight');
}
