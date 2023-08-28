function toggleNavBar() {
  var nav = document.getElementById('nav')
  nav.classList.toggle('show')

  if (window.getComputedStyle(document.body).overflow !== "hidden" || window.getComputedStyle(document.documentElement).overflow !== "hidden") {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
    document.documentElement.style.overflow = "visible";
  }
}

function scrollToDiv(id) {
  var navList = document.getElementById('nav-list')
  navList.style.transition = 'opacity 0ms, transform 0ms'

  var targetDiv = document.getElementById(id)
  targetDiv.scrollIntoView()

  var nav = document.getElementById('nav')
  nav.classList.toggle('show')
  setTimeout(() => {
    navList.style.transition = 'opacity 300ms, transform 300ms'
  }, 500)
  document.body.style.overflow = "visible"
  document.documentElement.style.overflow = "visible"
}

function openModal() {
  toggleNavBar()

  var modalDiv = document.getElementById('modal-background')
  modalDiv.classList.add('show')

  var menuButton = document.getElementById('menu-button')
  menuButton.style.cursor = 'auto';
  menuButton.ontouchstart = null

  document.body.style.overflow = "hidden"
  document.documentElement.style.overflow = "hidden"
}

function closeModal() {
  var modalDiv = document.getElementById('modal-background')
  modalDiv.classList.remove('show')

  var menuButton = document.getElementById('menu-button')
  menuButton.style.cursor = 'pointer';
  menuButton.ontouchstart = toggleNavBar;

  document.body.style.overflow = "visible"
  document.documentElement.style.overflow = "visible"
}
