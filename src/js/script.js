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

document.addEventListener("DOMContentLoaded", function(event) {
  // Reveal images on scroll
  window.sr = ScrollReveal({reset : true,});
  sr.reveal('img');

  // Make menu show up on scroll up, but hide on scroll down (for later, have to fix a few things first)
  // var header = document.querySelector("header");
  // var headroom  = new Headroom(header);
  // headroom.init(); 
});