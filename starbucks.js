const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const navigation = document.getElementById('navigation-box')


function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
}


btn.addEventListener('click', navToggle)






