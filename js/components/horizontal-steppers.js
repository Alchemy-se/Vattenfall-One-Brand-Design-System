(function ($) {
  function activeIndex(bullets, type) {
    bulletsArray = [];
    for (let i = 0; i < bullets.length; i++) {
      bulletsArray.push(bullets[i]);
    }

    let filterActive = bulletsArray.filter(bullet =>
      bullet.classList.contains(`vf-horizontal-steppers--active-${type}`)
    );

    let activeIndex = bulletsArray.indexOf(filterActive[0]);
    return activeIndex;
  }

  function hideLabels(bullets) {
    for (bullet of bullets) {
      bullet.nextElementSibling.style="display:none;";
    }
  }

  function addActiveClass(bullets, type) {
    if (type === 'default' || type === 'alternative' || type === "default-mobile") {
      bullets[activeIndex(bullets, type)].children[0].classList.add(
        'vf-icon-edit'
      );
      bullets[activeIndex(bullets, type)].children[0].classList.add(
        "vf-horizontal-steppers--vf-icon-edit"
      );
    }
    bullets[activeIndex(bullets, type)].nextElementSibling.style =
      'font-weight:bold;';
  }

  function completePrevious(bullets, type) {
    for (let i = 0; i < activeIndex(bullets, type); i++) {
      if (type === 'default' || type === 'alternative' || type === "default-mobile") {
        bullets[i].children[0].classList.add('vf-icon-check');
      }
      bullets[i].classList.add(`vf-horizontal-steppers--complete-${type}`);
      bullets[i].children[0].style = 'color:#fff;';
    }
  }

  function horizontalTabBar(type) {
    const bullets = document.getElementsByClassName(
      `vf-horizontal-steppers--bullet-${type}`
    );

    if (bullets.length > 0) {
      if (type === 'alternative' || type === "default-mobile") {
        hideLabels(bullets);
      }
      addActiveClass(bullets, type);
      completePrevious(bullets, type);
    }
  }

  horizontalTabBar('default');
  horizontalTabBar('numbers');
  horizontalTabBar('alternative');
  horizontalTabBar("default-mobile")
})(jQuery);
