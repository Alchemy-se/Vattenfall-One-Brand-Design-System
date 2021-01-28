// Wait for dom to load
window.addEventListener('load', () => {
  let doc
  let frame = document.querySelector('.responsiveTabs__iframe___1nTCV')

  // If responsive mode is true, use ifram document, else use DOM.
  if (frame) {
    doc = frame.contentDocument.body
  } else {
    doc = document
  }

  // Menu button
  let menuButton = doc.querySelector('#vf-navigation-menu-icon')
  let ul = doc.querySelector('.vf-navigation__menu-list')
  let searchBox = doc.querySelector('.vf-navigation__search-box')
  let searchButton = doc.querySelector('.vf-icon-search')
  let searchInpuField = searchBox.children[0]
  let menuListItems = doc.getElementsByClassName(
    'vf-navigation__menu-list-item'
  )

  function toggleMenu() {
    if (menuButton.classList.contains('vf-icon-menu')) {
      menuButton.classList.remove('vf-icon-menu')
      menuButton.classList.add('vf-icon-close')
      ul.style = 'display: block'
      searchButton.classList.remove('is-open')
      searchBox.style = 'visibility:hidden'
      searchInpuField.value = ''
    } else {
      menuButton.classList.remove('vf-icon-close')
      menuButton.classList.add('vf-icon-menu')
      ul.style = 'display: none'
    }
  }

  // check if a list item has a list as child
  // will only work if html structure is followed correctly
  function hasChildMenu(elem) {
    if (elem.children.length > 1) {
      return true
    } else {
      return false
    }
  }

  // Toggle child list menu
  function toggleChildMenu(icon) {
    console.log('click')
    let ul = icon.parentElement.nextElementSibling

    if (icon.classList.contains('vf-icon-more')) {
      icon.classList.remove('vf-icon-more')
      icon.classList.add('vf-icon-less-info')
      ul.style = 'display:block'
    } else {
      icon.classList.remove('vf-icon-less-info')
      icon.classList.add('vf-icon-more')
      ul.style = 'display:none'
    }
  }

  // Loop through list items
  for (let i = 0; i < menuListItems.length; i++) {
    let listItem = menuListItems[i]
    let listIcon = listItem.children[0].children[1]

    // Check if a list child exists
    if (hasChildMenu(listItem)) {
      listIcon.classList.remove('vf-icon-less-info')
      listIcon.classList.add('vf-icon-more')

      listIcon.addEventListener('click', () => toggleChildMenu(listIcon))
    } else {
      listIcon.classList.remove('vf-icon-more')
    }
  }

  // Show/hide search box
  function toggleSearch(searchButton, searchBox) {
    if (searchButton.classList.contains('is-open')) {
      searchButton.classList.remove('is-open')
      searchBox.style = 'visibility:hidden'
    } else {
      menuButton.classList.remove('vf-icon-close')
      menuButton.classList.add('vf-icon-menu')
      ul.style = 'display: none'
      searchButton.classList.add('is-open')
      searchBox.style = 'visibility:visible'
      searchInpuField.focus()
    }
  }

  // toggle menu
  menuButton.addEventListener('click', toggleMenu)

  // pressing search button
  searchButton.addEventListener('click', () => {
    // toggle search box
    toggleSearch(searchButton, searchBox)
  })
})
