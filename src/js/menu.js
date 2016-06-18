function extend(elem) {
  // Set variables
  var caret = elem.querySelector('.fa')
  var menu = elem.parentNode
  var submenu = elem.parentNode.querySelector('.submenu')

  // Define an event listener to close the menu if clicked outside
  var listener = function(event) {
    menu != event.target && !menu.contains(event.target) ? close(): false;
  }

  // Set functions
  var close = function() {
    if (elem.classList.contains("menu__extend--main")) {
      caret.classList.remove('fa-caret-up')
      caret.classList.add('fa-caret-down')
    } else {
      caret.classList.remove('fa-caret-left')
      caret.classList.add('fa-caret-right')
    }
    submenu.classList.remove('is-open')
    document.removeEventListener("click", listener)
  }

  var open = function() {
    if (elem.classList.contains("menu__extend--main")) {
      caret.classList.remove('fa-caret-down')
      caret.classList.add('fa-caret-up')
    } else {
      caret.classList.remove('fa-caret-right')
      caret.classList.add('fa-caret-left')
    }
    submenu.classList.add('is-open')
    document.addEventListener("click", listener)
  }

  // Check if menu is open or closed
  submenu.classList.contains('is-open') ? close() : open()
}

function toggle(selector) {
  var item = document.querySelector(selector)
  if (item.classList.contains('is-open')) {
    item.classList.remove('is-open')
  } else {
    item.classList.add('is-open')
  }
}
