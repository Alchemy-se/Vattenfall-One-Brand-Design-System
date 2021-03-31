(function ($) {
  // DEFAULT

  // function addActiveClassDefault(bullet) {
  //   bullet.children[0].classList.add('vf-icon-edit');
  //   bullet.children[0].classList.add('vf-horizontal-steppers--vf-icon-edit');
  //   bullet.nextElementSibling.style = 'font-weight:bold;';
  // }

  // function addCompleteClassDefault(bullet) {
  //   bullet.children[0].classList.add('vf-icon-check');
  // }

  // for (let i = 0; i < defaultuBullets.length; i++) {
  //   // let isActiveDefault = defaultuBullets[i].classList.contains(
  //   //   'vf-horizontal-steppers--active-default'
  //   // )
  //   // let isCompleteDefault = defaultuBullets[i].classList.contains(
  //   //   'vf-horizontal-steppers--complete-default'
  //   // )
  //   // if (isActiveDefault) {
  //   //   addActiveClassDefault(bullets[i])
  //   // }
  //   // if (isCompleteDefault) {
  //   //   addCompleteClassDefault(bullets[i])
  //   // }
  // }

  function activeIndex(bullets, bulletType) {
    bulletsArray = [];
    for (let i = 0; i < bullets.length; i++) {
      bulletsArray.push(bullets[i]);
    }

    let filterActive = bulletsArray.filter(bullet =>
      bullet.classList.contains(`vf-horizontal-steppers--active-${bulletType}`)
    );

    let activeIndex = bulletsArray.indexOf(filterActive[0]);
    return activeIndex;
  }

  // NUMBERS
  function horizontalTabBar(type) {
    const bullets = document.getElementsByClassName(
      `vf-horizontal-steppers--bullet-${type}`
    );

    function addActiveClass(type) {
      if (type === 'default') {
        bullets[activeIndex(bullets, type)].children[0].classList.add(
          'vf-icon-edit'
        );
        bullets[activeIndex(bullets, type)].children[0].classList.add(
          "'vf-horizontal-steppers--vf-icon-edit'"
        );
      }
      bullets[activeIndex(bullets, type)].nextElementSibling.style =
        'font-weight:bold;';
    }

    function completePrevious(type) {
      for (let i = 0; i < activeIndex(bullets, type); i++) {
        if (type === 'default') {
          bullets[i].children[0].classList.add('vf-icon-check');
        }
        bullets[i].classList.add(`vf-horizontal-steppers--complete-${type}`);
        bullets[i].children[0].style = 'color:#fff;';
      }
    }

    if (bullets.length > 0) {
      addActiveClass(type);
      completePrevious(type);
    }
  }
  horizontalTabBar('default');
  horizontalTabBar('numbers');
})(jQuery);
