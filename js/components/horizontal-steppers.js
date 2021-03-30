;(function ($) {
  const bullets = document.getElementsByClassName(
    'vf-horizontal-steppers--bullet'
  )

  function addActiveClass(bullet) {
    bullet.children[0].classList.add('vf-icon-edit')
    bullet.children[0].classList.add('vf-horizontal-steppers--vf-icon-edit')
  }

  function addCompleteClass(bullet) {
    bullet.children[0].classList.add('vf-icon-check')
  }

  for (let i = 0; i < bullets.length; i++) {
    let isActive = bullets[i].classList.contains(
      'vf-horizontal-steppers--active'
    )

    let isComplete = bullets[i].classList.contains(
      'vf-horizontal-steppers--complete'
    )

    if (isActive) {
      addActiveClass(bullets[i])
      bullets[i].nextElementSibling.style = 'font-weight:bold;'
    }

    if (isComplete) {
      addCompleteClass(bullets[i])
    }
  }
})(jQuery)
