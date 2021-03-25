;(function ($) {
  function singleSelects() {
    let singleSelectList = document.getElementsByClassName(
      'vf-visual-pickers__single-select'
    )

    let singleSelectButtons = []
    for (let i = 0; i < singleSelectList.length; i++) {
      let singleSelect = singleSelectList[i].firstElementChild
      if (singleSelect.disabled == true) {
        singleSelect.parentElement.style = 'background: #EEEEEE; pointer-events:none'
        singleSelect.nextElementSibling.style =
          'color: #767676; pointer-events:none;'

        singleSelect.nextElementSibling.children[0].style = 'opacity:0.65'
      }
      let checkmark = singleSelect.nextElementSibling.nextElementSibling

      // push singleSelect buttons to array
      singleSelectButtons.push(singleSelect)

      singleSelect.addEventListener('click', function (e) {
        checkmark.classList.add('vf-icon-check')
        singleSelectList[i].classList.add('vf-visual-pickers__outline')
        removeClassSingleSelect(e)
      })
    }

    function removeClassSingleSelect(e) {
      // filter singleSelectbuttons by not selected ones
      var nonTargets = singleSelectButtons.filter(rb => rb !== e.target)
      nonTargets.forEach(f => {
        let icon = f.nextElementSibling.nextElementSibling
        icon.classList.remove('vf-icon-check')
        icon.parentElement.classList.remove('vf-visual-pickers__outline')
      })
    }
  }

  function multiSelects() {
    let multiSelectList = document.getElementsByClassName(
      'vf-visual-pickers__multi-select'
    )
    for (let i = 0; i < multiSelectList.length; i++) {
      let multiSelect = multiSelectList[i].firstElementChild
      let checkmark = multiSelect.nextElementSibling.nextElementSibling

      multiSelect.addEventListener('click', function () {
        if (multiSelect.checked == true) {
          checkmark.classList.add('vf-icon-check')
          multiSelectList[i].classList.add('vf-visual-pickers__outline')
        } else {
          checkmark.classList.remove('vf-icon-check')
          multiSelectList[i].classList.remove('vf-visual-pickers__outline')
        }
      })
    }
  }

  function visualPickers() {
    singleSelects()
    multiSelects()
  }

  visualPickers()
})(jQuery)
