const { filter } = require('lodash')

window.onload = () => {
  function radios() {
    let radioList = document.getElementsByClassName('vf-visual-pickers__radio')

    let radioButtons = []
    for (let i = 0; i < radioList.length; i++) {
      let radio = radioList[i].firstElementChild
      let checkmark = radio.nextElementSibling.nextElementSibling

      // push radio buttons to array
      radioButtons.push(radio)

      radio.addEventListener('click', function (e) {
        checkmark.classList.add('vf-icon-check')
        radioList[i].classList.add('vf-visual-pickers__outline')
        removeClassRadio(e)
      })
    }

    function removeClassRadio(e) {
      // filter radiobuttons by not selected ones
      var nonTargets = radioButtons.filter(rb => rb !== e.target)
      nonTargets.forEach(f => {
        let icon = f.nextElementSibling.nextElementSibling
        icon.classList.remove('vf-icon-check')
        icon.parentElement.classList.remove('vf-visual-pickers__outline')
      })
    }
  }

  function checkboxes() {
    let checkboxList = document.getElementsByClassName(
      'vf-visual-pickers__checkbox'
    )
    for (let i = 0; i < checkboxList.length; i++) {
      let checkbox = checkboxList[i].firstElementChild
      let checkmark = checkbox.nextElementSibling.nextElementSibling

      checkbox.addEventListener('click', function () {
        if (checkbox.checked == true) {
          checkmark.classList.add('vf-icon-check')
          checkboxList[i].classList.add('vf-visual-pickers__outline')
        } else {
          checkmark.classList.remove('vf-icon-check')
          checkboxList[i].classList.remove('vf-visual-pickers__outline')
        }
      })
    }
  }

  function links() {
    let links = []
    let linkList = document.getElementsByClassName('vf-visual-pickers__link')
    for (let i = 0; i < linkList.length; i++) {
      let link = linkList[i].firstElementChild
      let checkmark = link.nextElementSibling

      links.push(link)
      link.addEventListener('click', function (e) {
        link.nextElementSibling.classList.add('vf-icon-check')
        linkList[i].classList.add("vf-visual-pickers__outline")
        removeClassLink(e)
      })
    }

    function removeClassLink(e) {
      // filter radiobuttons by not selected ones
      var nonTargets = links.filter(a => a !== e.target)
      nonTargets.forEach(f => {
        let checkmark = a.nextElementSibling
        checkmark.classList.remove('vf-icon-check')
        checkmark.parentElement.classList.remove('vf-visual-pickers__outline')
      })
    }
  }

  function visualPickers() {
    radios()
    checkboxes()
    // links()
  }

  visualPickers()
}
