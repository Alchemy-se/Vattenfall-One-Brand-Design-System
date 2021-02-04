// Wait for dom to load
window.addEventListener('load', () => {
  let doc
  let frame = document.querySelector('.responsiveTabs__iframe___1nTCV')
  let markdownChildren = document.querySelectorAll(
    '.index__htmlInnerContainer___FJLtG'
  )
  let previewAreas = document.querySelectorAll('.index__html___3cypL')
  let markdownElement = document.querySelector('.index__container___3_kmB')
  markdownElement.style = 'max-width: 1482px'

  for (let child of markdownChildren) {
    child.style = "height:auto"
  }

  previewAreas[1].style = 'padding-bottom: 180px'
  previewAreas[2].style = 'padding-bottom: 165px'
  previewAreas[4].style = 'padding-bottom: 165px'
  previewAreas[5].style = 'padding-bottom: 110px'

  // If responsive mode is true, use ifram document, else use DOM.
  if (frame) {
    doc = frame.contentDocument.body
    doc.style = 'padding:0'
  } else {
    doc = document
  }

  // Menu button
  let menuButton = doc.querySelector('#vf-navigation-menu-icon')
  let ul = doc.querySelector('.vf-navigation__menu-list')
  let searchBox = doc.querySelector('.vf-navigation__search-box')
  let searchButton = doc.querySelector('.vf-icon-search')
  let searchButtonDesktop = doc.querySelector(
    '.vf-navigation__icon-search-desktop'
  )
  let searchInpuField = searchBox.children[0]
  let navLinks = doc.querySelectorAll('#vf-navigation__link')
  let menuListItems = doc.getElementsByClassName(
    'vf-navigation__menu-list-item'
  )

  // Toggle Active Links
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      let arrow = e.target.nextElementSibling.nextElementSibling

      let li = e.target.parentElement.parentElement
      let siblings = li.parentElement.children

      searchButtonDesktop.addEventListener('click', function () {
        console.log(li.classList.remove('active'))
      })

      for (let sib of siblings) {
        if (sib.classList.contains('active')) {
          sib.classList.remove('active')
          searchBox.classList.remove('active')
          li.classList.add('active')

          // Toggle Active Arrow
          let sibArrow = sib.children[0].children[2]
          if (sibArrow) {
            if (sibArrow.classList.contains('active')) {
              sibArrow.classList.remove('active')
              arrow.classList.add('active')
            } else {
              arrow.classList.add('active')
            }
          }
        } else {
          li.classList.add('active')
          searchBox.classList.remove('active')
        }
      }
    })
  })

  // pressing search button desktop
  searchButtonDesktop.addEventListener('click', () => {
    if (searchBox.classList.contains('active')) {
      searchBox.classList.remove('active')
    } else {
      searchBox.classList.add('active')
      searchInpuField.focus()
    }
  })

  function toggleMenu() {
    if (menuButton.classList.contains('vf-icon-menu')) {
      menuButton.classList.remove('vf-icon-menu')
      searchBox.classList.remove('active')
      menuButton.classList.add('vf-icon-close')
      ul.style = 'display: block'
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
    }

    if (hasChildMenu(listItem) == false) {
      listIcon.classList.remove('vf-icon-more')
      listIcon.classList.remove('vf-icon-less-info')
    }
  }

  // Show/hide search box
  function toggleSearch(searchBox) {
    if (searchBox.classList.contains('active')) {
      searchBox.classList.remove('active')
    } else {
      menuButton.classList.remove('vf-icon-close')
      menuButton.classList.add('vf-icon-menu')
      ul.style = 'display: none'
      searchBox.classList.add('active')
      searchInpuField.focus()
    }
  }

  // toggle menu
  menuButton.addEventListener('click', toggleMenu)

  // pressing search button mobile/tablet
  searchButton.addEventListener('click', () => {
    toggleSearch(searchBox)
  })
})
