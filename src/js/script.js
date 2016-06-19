function show(elem, bool) {
  if (bool) {
    elem.getElementsByTagName('ul')[0].style.display = "block"
  }
}

function hide(elem, bool) {
  if (bool) {
    elem.getElementsByTagName('ul')[0].style.display = "none"
  }
}

function toggleDebug() {
  if (document.querySelector(".debug-panel").classList.contains("debug-panel--open")) {
    closeDebug()
  } else {
    openDebug()
  }
}

function openDebug() {
  document.querySelector(".debug-panel").classList.add("debug-panel--open")
  document.querySelector(".page-container").classList.add("has-debug-panel")
}

function closeDebug() {
  document.querySelector(".debug-panel").classList.remove("debug-panel--open")
  document.querySelector(".page-container").classList.remove("has-debug-panel")
}

document.addEventListener("DOMContentLoaded", function(event) {
  // Reveal images on scroll
  window.sr = ScrollReveal({reset : true,});
  sr.reveal('img');

  // Make menu show up on scroll up, but hide on scroll down (for later, have to fix a few things first)
  var header = document.querySelector(".headroom")
  var footer = document.querySelector("footer")
  var headroom  = new Headroom(header)
  var footerroom  = new Headroom(footer)
  headroom.init();
  footerroom.init();
});
