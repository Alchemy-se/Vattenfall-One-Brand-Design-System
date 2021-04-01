(function ($) {
  function activeIndex(stepper, type) {
    stepperArray = [];
    for (let i = 0; i < stepper.length; i++) {
      stepperArray.push(stepper[i]);
    }

    let filterActive = stepperArray.filter(bullet =>
      bullet.classList.contains(`vf-horizontal-steppers--active-${type}`)
    );

    let activeIndex = stepperArray.indexOf(filterActive[0]);
    return activeIndex;
  }

  function hideLabels(steppers) {
    for (stepper of steppers) {
      stepper.nextElementSibling.style = 'display:none;';
    }
  }

  function addActiveClass(steppers, type, index) {
    if (
      type === 'default' ||
      type === 'alternative' ||
      type === 'default-mobile'
    ) {
      steppers[index].children[0].classList.add('vf-icon-edit');
      steppers[index].children[0].classList.add(
        'vf-horizontal-steppers--vf-icon-edit'
      );
    }

    if (type === 'alternative-mobile' || type === 'portal-details-mobile') {
      const htmlText =
        `${index + 1} of ${steppers.length} - ` +
        steppers[index].nextElementSibling.innerText;

      steppers[index].nextElementSibling.innerText = htmlText;
    }

    steppers[index].nextElementSibling.style =
      'font-family: Vattenfall Hall Bold NORDx; font-weight:bold;';
  }

  function completePreviousBullet(bullets, type, index) {
    for (let i = 0; i < index; i++) {
      if (
        type === 'default' ||
        type === 'alternative' ||
        type === 'default-mobile'
      ) {
        bullets[i].children[0].classList.add('vf-icon-check');
      }
      bullets[i].classList.add(`vf-horizontal-steppers--complete-${type}`);
      bullets[i].children[0].style = 'color:#fff;';
    }
  }

  function completePreviousDash(dash, type, index) {
    for (let i = 0; i < index; i++) {
      dash[i].classList.add(`vf-horizontal-steppers--complete-${type}`);
    }
  }

  function bulletStepper(type) {
    const bullets = document.getElementsByClassName(
      `vf-horizontal-steppers--bullet-${type}`
    );

    if (bullets.length > 0) {
      if (
        type === 'alternative' ||
        type === 'default-mobile' ||
        type === 'numbers-mobile'
      ) {
        hideLabels(bullets);
      }
      addActiveClass(bullets, type, activeIndex(bullets, type));
      completePreviousBullet(bullets, type, activeIndex(bullets, type));
    }
  }

  function dashedStepper(type) {
    const dash = document.getElementsByClassName(
      `vf-horizontal-steppers--dash--${type}`
    );

    if (dash.length > 0) {
      hideLabels(dash);
      addActiveClass(dash, type, activeIndex(dash, type));
      completePreviousDash(dash, type, activeIndex(dash, type));
    }
  }

  function portalStepper(type) {
    const portal = document.getElementsByClassName(
      `vf-horizontal-steppers--${type}`
    );
    if (portal.length > 0) {
      if (type === 'portal-details-mobile') {
        hideLabels(portal);
      }
      addActiveClass(portal, type, activeIndex(portal, type));
      completePreviousDash(portal, type, activeIndex(portal, type));
    }
  }

  bulletStepper('default');
  bulletStepper('numbers');
  bulletStepper('alternative');
  bulletStepper('default-mobile');
  bulletStepper('numbers-mobile');
  dashedStepper('alternative-mobile');
  portalStepper('portal-mobile');
  portalStepper('portal-details-mobile');
})(jQuery);
