import { Tabs } from 'antd'
;(function ($) {
  $('.vf-tab-bar-item').each(function (index) {
    if ($(this).hasClass('vf-tab-bar-item--active')) {
      $(this)
        .find('.vf-tab-bar-link')
        .clone()
        .addClass('vf-tab-bar-link-mobile vf-tab-bar-link-mobile--active')
        .removeClass('vf-tab-bar-link')
        .removeAttr('aria-selected tabindex')
        .insertAfter($(this))
    } else {
      $(this)
        .find('.vf-tab-bar-link')
        .clone()
        .addClass('vf-tab-bar-link-mobile')
        .removeClass('vf-tab-bar-link')
        .removeAttr('aria-selected tabindex')
        .insertAfter($(this))
    }
  })

  $('.vf-tab-bar-item')
    .unbind()
    .on('click keyup', function () {
      if (!$(this).hasClass('vf-tab-bar-item--disabled')) {
        $(this)
          .addClass('vf-tab-bar-item--active')
          .attr({ 'aria-selected': 'true', tabindex: '0' })
          .siblings()
          .removeClass('vf-tab-bar-item--active')
          .attr({ 'aria-selected': 'false', tabindex: '-1' })

        $(this)
          .nextAll('.vf-tab-bar-link-mobile:first')
          .addClass('vf-tab-bar-link-mobile--active')
          .siblings('.vf-tab-bar-link-mobile')
          .removeClass('vf-tab-bar-link-mobile--active')

        $(this)
          .closest('.vf-tab-bar-container')
          .find('[role="tabpanel"]')
          .attr('hidden', true)

        $(this)
          .closest('.vf-tab-bar-container')
          .find('#' + $(this).attr('aria-controls'))
          .attr('hidden', false)
      }
    })

  let mobileTabsFixed = document.getElementsByClassName(
    'vf-tab-bar-item--mobile--fixed'
  )
  let mobileTabsScroll = document.getElementsByClassName(
    'vf-tab-bar-item--mobile--scroll'
  )

  let mobileTabsContentFixed = document.getElementsByClassName(
    'vf-tab-bar-content--mobile--fixed'
  )

  let mobileTabsContentScroll = document.getElementsByClassName(
    'vf-tab-bar-content--mobile--scroll'
  )

  function toggleTabs(mobileTabs, mobileTabsContent) {
    for (let i = 0; i < mobileTabs.length; i++) {
      mobileTabs[i].addEventListener('click', function (ev) {
        let siblings = ev.target.parentElement.children

        // remove active class from all tabs
        for (let sibling of siblings) {
          sibling.classList.remove('vf-tab-bar-item--mobile--active')
        }

        // hide all tab contents
        for (let content of mobileTabsContent) {
          content.style = 'display:none;'
        }

        // add active class to selected
        ev.target.classList.add('vf-tab-bar-item--mobile--active')

        // display selected tab content
        mobileTabsContent[i].style = 'display:block;'
        // mobileTabContentScroll[i].style = 'display:block;'
      })

      let isActive = mobileTabs[i].classList.contains(
        'vf-tab-bar-item--mobile--active'
      )

      if (isActive) {
        mobileTabsContent[i].style = 'display:block;'
      }
    }
  }

  toggleTabs(mobileTabsFixed, mobileTabsContentFixed)
  toggleTabs(mobileTabsScroll, mobileTabsContentScroll)
})(jQuery)
