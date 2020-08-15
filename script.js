const navbar = document.getElementById('navbarExample'),
  button = document.getElementById('navbarButton'),
  container = document.getElementById('navbarContainer')
let switched = false

button.addEventListener('click', function (e) {
  switched = !switched
  if (switched) container.classList.remove('hidden')
  else container.classList.add('hidden')
})

window.addEventListener('resize', function (e) {
  if (window.matchMedia('(min-width: 768px)').matches) {
    if (!switched) {
      switched = true
      container.classList.remove('hidden')
    }
  } else {
    if (switched) {
      switched = false
      container.classList.add('hidden')
    }
  }
})