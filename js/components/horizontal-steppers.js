;(function ($) {
  // DEFAULT
  const defaultuBullets = document.getElementsByClassName(
    'vf-horizontal-steppers--bullet'
  )

  function addActiveClassDefault(bullet) {
    bullet.children[0].classList.add('vf-icon-edit')
    bullet.children[0].classList.add('vf-horizontal-steppers--vf-icon-edit')
    bullet.nextElementSibling.style = 'font-weight:bold;'
  }

  function addCompleteClassDefault(bullet) {
    bullet.children[0].classList.add('vf-icon-check')
  }

  for (let i = 0; i < defaultuBullets.length; i++) {
    // let isActiveDefault = defaultuBullets[i].classList.contains(
    //   'vf-horizontal-steppers--active-default'
    // )
    // let isCompleteDefault = defaultuBullets[i].classList.contains(
    //   'vf-horizontal-steppers--complete-default'
    // )
    // if (isActiveDefault) {
    //   addActiveClassDefault(bullets[i])
    // }
    // if (isCompleteDefault) {
    //   addCompleteClassDefault(bullets[i])
    // }
  }

  // NUMBERS
  function numbersTabBar() {
    const numbersBullets = document.getElementsByClassName(
      'vf-horizontal-steppers--bullet-numbers'
    )
    function activeIndex() {
      numbersBulletsArray = []
      for (let i = 0; i < numbersBullets.length; i++) {
        numbersBulletsArray.push(numbersBullets[i])
      }

      let filterActive = numbersBulletsArray.filter(bullet =>
        bullet.classList.contains('vf-horizontal-steppers--active-numbers')
      )

      let activeIndex = numbersBulletsArray.indexOf(filterActive[0])
      return activeIndex
    }
    function addActiveClassNumbers() {
      numbersBullets[activeIndex()].nextElementSibling.style =
        'font-weight:bold;'
    }
    function completePreviousNumbers() {
      for (let i = 0; i < activeIndex(); i++) {
        numbersBullets[i].classList.add(
          'vf-horizontal-steppers--complete-numbers'
        )
        numbersBullets[i].children[0].style = 'color:#fff;'
      }
    }
    function numbersOnChange() {}
    addActiveClassNumbers()
    completePreviousNumbers()
    numbersOnChange()
  }
  numbersTabBar()
})(jQuery)
