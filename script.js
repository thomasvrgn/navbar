const navbar = document.getElementById('navbarExample'),
  button = document.getElementById('navbarButton'),
  container = document.getElementById('navbarContainer'),
  dropdown = navbar.querySelectorAll('.navbarDropdown')
let switched = false

button.addEventListener('click', function (e) {
  switched = !switched
  if (switched) {
    container.classList.remove('hidden')
    container.classList.add('flex')
  } else {
    container.classList.add('hidden')
    container.classList.remove('flex')
  }
})

for (const dropdownElement of dropdown) {
  const parent = dropdownElement.parentElement
  parent.addEventListener('click', function (e) {
    if (dropdownElement.classList.contains('hidden')) {
      dropdownElement.classList.remove('hidden')
      parent.getElementsByTagName('svg')[0].style.transform = 'rotate(90deg)'
    } else {
      dropdownElement.classList.add('hidden')
      parent.getElementsByTagName('svg')[0].style.transform = 'rotate(0deg)'
    }
  })
}

window.addEventListener('resize', function (e) {
  if (window.matchMedia('(min-width: 768px)').matches) {
    if (!switched) {
      switched = true
      container.classList.remove('hidden')
      container.classList.add('flex')
    }
  } else {
    if (switched) {
      switched = false
      container.classList.add('hidden')
      container.classList.remove('flex')
    }
  }
})