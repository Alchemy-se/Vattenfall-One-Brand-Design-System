// Wait for dom to load

// window.onload = () => {  
  let markdownChildren = document.querySelectorAll(
    '.index__htmlInnerContainer___FJLtG'
  )
  // Set height for pre tags
  for (let child of markdownChildren) {
    child.style = 'height:auto'
  }

  let previewAreas = document.querySelectorAll('.index__html___3cypL')

    if(previewAreas[2]) previewAreas[2].style = 'padding-bottom: 165px'
    if(previewAreas[3]) previewAreas[3].style = 'padding-bottom: 165px'
    if(previewAreas[4]) previewAreas[4].style = 'padding-bottom: 110px'
    if(previewAreas[5]) previewAreas[5].style = 'padding-bottom: 135px'
    
  /**
   *  CODE BELOW IS FOR THE NON-RESPONSIVE PREVIEW
   */

  let navMenus = document.querySelectorAll('.vf-navigation__menu')

  // Run scaling on load
  scaling(navMenus)

  // Then run scaling whenever window is resized
  window.addEventListener('resize', function () {
    scaling(navMenus)
  })

  function scaling(navMenus) {
    navMenus && navMenus.forEach(navMenu => {
      let navDimensions = navMenu.getBoundingClientRect()
      let navWidth = parseInt(navDimensions.width)

      if (navWidth >= 1440) {
        navMenu.style = 'font-size:10px'
      }

      if (navWidth < 1440 && navWidth > 1260) {
        navMenu.style = 'font-size:9px'
        if (previewAreas) {
          previewAreas[2].style = 'padding-bottom: 150px'
          previewAreas[3].style = 'padding-bottom: 150px'
          previewAreas[4].style = 'padding-bottom: 100px'
          previewAreas[5].style = 'padding-bottom: 165px'
        }
      }

      if (navWidth <= 1260 && navWidth > 1160) {
        navMenu.style = 'font-size:8px'
        if (previewAreas) {
          previewAreas[2].style = 'padding-bottom: 135px'
          previewAreas[3].style = 'padding-bottom: 135px'
          previewAreas[4].style = 'padding-bottom: 90px'
          previewAreas[5].style = 'padding-bottom: 150px'
        }
      }

      if (navWidth <= 1160 && navWidth > 960) {
        navMenu.style = 'font-size:7px'
        if (previewAreas) {
          previewAreas[2].style = 'padding-bottom: 120px'
          previewAreas[3].style = 'padding-bottom: 120px'
          previewAreas[4].style = 'padding-bottom: 80px'
          previewAreas[5].style = 'padding-bottom: 132px'
        }
      }

      if (navWidth <= 960 && navWidth > 860) {
        navMenu.style = 'font-size:6px'
        if (previewAreas) {
          previewAreas[2].style = 'padding-bottom: 105px'
          previewAreas[3].style = 'padding-bottom: 105px'
          previewAreas[4].style = 'padding-bottom: 75px'
          previewAreas[5].style = 'padding-bottom: 116px'
        }
      }

      if (navWidth <= 860) {
        navMenu.style = 'font-size:5px'
        if (previewAreas) {
          previewAreas[2].style = 'padding-bottom: 90px'
          previewAreas[3].style = 'padding-bottom: 90px'
          previewAreas[4].style = 'padding-bottom: 65px'
          previewAreas[5].style = 'padding-bottom: 100px'
        }
      }
    })
  }

  // Check current state for searchbox on load
  // and add event handler
  toggleSearchBoxDesktop()

  // Toggle searchBox desktop
  function toggleSearchBoxDesktop() {
    navMenus.forEach(navMenu => {
      let searchBox = navMenu.querySelector('.vf-navigation__search-box')
      let searchIcon = navMenu.querySelector(
        '.vf-navigation__icon-search-desktop'
      )
      let searchClose = navMenu.querySelector(
        '.vf-navigation__icon-close-desktop'
      )

      // check if searchBox exists
      if (searchBox) {
        let searchInput = searchBox.children[0]

        // check if searchbox is active
        if (searchBox.classList.contains('active')) {
          searchIcon.style = 'background:#ebf2f3;'
          searchInput.focus({ preventScroll: true })
        } else {
          searchIcon.style = 'background:#ffffff'
        }

        searchIcon.addEventListener('click', event =>
          clickSearchIcon(event, searchBox, searchIcon, searchInput)
        )

        // check if searchClose exists
        if (searchClose) {
          searchClose.addEventListener('click', () =>
            searchCloseButton(searchBox, searchIcon)
          )
        }
      }
    })
  }

  function clickSearchIcon(event, searchBox, searchIcon, searchInput) {
    if (searchBox.classList.contains('active')) {
      searchBox.classList.remove('active')
      searchIcon.style = 'background:#ffffff;'
    } else {
      searchBox.classList.add('active')
      searchIcon.style = 'background:#ebf2f3;'
      searchInput.focus()
    }
  }

  function searchCloseButton(searchBox, searchIcon) {
    if (searchBox.classList.contains('active')) {
      searchBox.classList.remove('active')
      searchIcon.style = 'background:#ffffff;'
    }
  }

  /**
   *  CODE BELOW IS FOR THE RESPONSIVE PREVIEW BOX
   */

  let doc
  let responsive = document.querySelector('.responsiveTabs__iframe___1nTCV')
  // If responsive mode is true, use iframe document
  if (responsive) {
    doc = responsive.contentDocument.body
    doc.style = 'padding:0'

    // Menu button
    let menuButton = doc.querySelector('#vf-navigation-menu-icon')
    let ul = doc.querySelector('.vf-navigation__menu-list')
    let searchBox = doc.querySelector('.vf-navigation__search-box')
    let searchButtonMobile = doc.querySelector('.vf-icon-search')
    let searchButtonDesktop = doc.querySelector(
      '.vf-navigation__icon-search-desktop'
    )
    let searchCloseDesktop = doc.querySelector(
      '.vf-navigation__icon-close-desktop'
    )

    if (searchBox) {
       var searchInputfield = searchBox.children[0]
    }

    let navLinks = doc.querySelectorAll('#vf-navigation__link')
    let menuListItems = doc.getElementsByClassName(
      'vf-navigation__menu-list-item'
    )

    // Toggle Active Links
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        searchButtonDesktop.style = 'background:#ffffff;'
        let arrow = e.target.nextElementSibling.nextElementSibling
        let li = e.target.parentElement.parentElement
        let siblings = li.parentElement.children

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

    // toggle menu list
    menuButton && menuButton.addEventListener('click', toggleMenu)

    function toggleMenu() {
      if (menuButton.classList.contains('vf-icon-menu')) {
        menuButton.classList.remove('vf-icon-menu')
        searchBox.classList.remove('active')
        searchButtonMobile.style = 'background:#ffffff;'
        menuButton.classList.add('vf-icon-close')
        ul.style = 'display: block'
      } else {
        menuButton.classList.remove('vf-icon-close')
        menuButton.classList.add('vf-icon-menu')
        ul.style = 'display: none'
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

    // Toggle child list menu
    function toggleChildMenu(icon) {
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

    // check if a list item has a list as child
    function hasChildMenu(elem) {
      if (elem.children.length > 1) {
        return true
      } else {
        return false
      }
    }

    // pressing search button mobile/tablet
    searchButtonMobile && searchButtonMobile.addEventListener('click', () => {
      toggleSearchMobile(searchBox, searchButtonMobile)
    })

    searchButtonDesktop && searchButtonDesktop.addEventListener('click', () => {
      toggleSearchDesktop(searchBox, searchButtonDesktop)
    })

    // Show/hide search box
    function toggleSearchMobile(searchBox) {
      if (searchBox.classList.contains('active')) {
        searchBox.classList.remove('active')
        searchButtonMobile.style = 'background:#ffffff;'
      } else {
        menuButton.classList.remove('vf-icon-close')
        menuButton.classList.add('vf-icon-menu')
        ul.style = 'display: none'
        searchBox.classList.add('active')
        searchButtonMobile.style = 'background:#ebf2f3;'
        searchInputField.focus()
      }
    }

    function toggleSearchDesktop(searchBox) {
      if (searchBox.classList.contains('active')) {
        searchBox.classList.remove('active')
        searchButtonDesktop.style = 'background:#ffffff;'
      } else {
        searchBox.classList.add('active')
        searchButtonDesktop.style = 'background:#ebf2f3'
        searchInputField.focus()
        navLinks.forEach(link =>
          link.parentElement.parentElement.classList.remove('active')
        )
        searchCloseDesktop.addEventListener('click', function () {
          searchBox.classList.remove('active')
          searchButtonDesktop.style = 'background:#ffffff;'
        })
      }
    }
  }
// }
