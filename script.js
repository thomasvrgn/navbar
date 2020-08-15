const navbar = document.getElementById('navbarExample'),
  button = document.getElementById('navbarButton'),
  container = document.getElementById('navbarContainer'),
  dropdown = navbar.querySelectorAll('.navbarDropdown')
let switched = false

button.addEventListener('click', function (e) {
  switched = !switched
  if (switched) container.classList.remove('hidden')
  else container.classList.add('hidden')
})

for (const dropdownElement of dropdown) {
  dropdownElement.parentNode.addEventListener('click', function (e) {
    if (dropdownElement.classList.contains('hidden'))
      dropdownElement.classList.remove('hidden')
    else
      dropdownElement.classList.add('hidden')
  })
}

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