;(function ($) {
  const windowWidth = $(window).width()
  const cardContainer = $('.vf-carousel-card-container')
  const indicatorContainer = $('.vf-carousel-indicator-container')
  const carouselContainer = $('#vf-carousel-container')
  const isMobile = windowWidth < 576
  const centerOfWindow = windowWidth / 2
  const breakPoint = isMobile ? 0.25 : 0.33

  $('#left-arrow').click(previousSlide)
  $('#right-arrow').click(nextSlide)

  function nextSlide() {
    const $currentSlide = carouselContainer.find('div:first')
    const cardWidth = $currentSlide.width()
    const margin = $currentSlide.css('margin-right')
    const totalWidth = cardWidth + parseInt(margin)
    carouselContainer.animate(
      {
        scrollLeft: `+=${totalWidth}px`,
      },
      'slow'
    )
  }

  function previousSlide() {
    const $currentSlide = carouselContainer.find('div:first')
    const cardWidth = $currentSlide.width()
    const margin = $currentSlide.css('margin-right')
    const totalWidth = cardWidth + parseInt(margin)
    carouselContainer.animate(
      {
        scrollLeft: `-=${totalWidth}px`,
      },
      'slow'
    )
  }

  // find index of the card that is visible to 100%
  // and use that to set the indicator to that card.
  const findActiveCard = entries => {
    return new Promise(resolve => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio === 1) {
              const visibleIndex = entry.target.getAttribute('index')
              observer.unobserve(entry.target)
              resolve(visibleIndex)
            }
            observer.unobserve(entry.target)
          }
        })
      })
      observer.observe(entries)
    })
  }

  const addOverlay = (entries, observer) => {
    entries.forEach(entry => {
      // dont add overlay to cards on the left hand side of the screen.
      if (centerOfWindow < entry.intersectionRect.right) {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio < breakPoint) {
            entry.target.classList.add('vf-carousel-next-slide-overlay')
          } else {
            entry.target.classList.remove('vf-carousel-next-slide-overlay')
          }
        }
        observer.unobserve(entry.target)
      }
    })
  }
  let options = {
    root: document.querySelector('#vf-carousel-container'),
    rootMargin: '0px',
  }

  const observer = new IntersectionObserver(addOverlay, options)

  if (isMobile) {
    // create indicator dots
    for (let i = 0; i < cardContainer.length; i++) {
      if (i === 0) {
        // add active class to first indicator
        indicatorContainer.append(
          '<div class="vf-carousel-indicator vf-carousel-indicator-active"></div>'
        )
      } else {
        indicatorContainer.append('<div class="vf-carousel-indicator"></div>')
      }
    }
  }
  // on load - first run
  // creat attribute index to every card and add intial overlay to card not 100% visible
  carouselContainer.children(cardContainer).each(async function (i, object) {
    const currentElement = $(this)
    let text = currentElement.find('.vf-carousel-subtitle').text()
    if (text.length > 100) {
      currentElement
        .find('.vf-carousel-subtitle')
        .html(text.substr(0, 100) + '...')
    }
    currentElement.attr('index', i)
    observer.observe(object)
  })

  // runs when user scrolls in the carousel
  carouselContainer.scroll(function () {
    carouselContainer
      .children('.vf-carousel-card-container')
      .each(async function (i, object) {
        // add or remove overlay on scroll
        observer.observe(object)

        // find index of the active card and pass it down to handleActiveIndicator which
        // highlight respective indicator dot. We only show the indicators on mobile
        if (isMobile) {
          const index = await findActiveCard(object)
          handleActiveIndicator(index)
        }
      })
  })

  // adds or remove class to indicator if the carousel card is in viewport too 100%
  function handleActiveIndicator(index) {
    $('.vf-carousel-indicator').each(function (i, object) {
      let activeIndicator = $(this)
      if (parseInt(index) === i) {
        activeIndicator.addClass('vf-carousel-indicator-active')
      } else {
        activeIndicator.removeClass('vf-carousel-indicator-active')
      }
    })
  }
})(jQuery)
