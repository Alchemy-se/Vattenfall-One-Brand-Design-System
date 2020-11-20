$(document).ready(function () {
  (function ($) {

    const windowWidth = $(window).width()
    const cardContainer = $('.vf-carousel-card-container');
    const indicatorContainer = $('.vf-carousel-indicator-container');
    let carouselContainer = $('#vf-carousel-container');

    // Used for controlling if the scroll event should be allowed to run.
    // If we omit this the scroll event will fire on the arrow right/left buttin press
    // and will result in performance issues
    let hoverCarousel = false;

    const scrollHandling = {
      allow: true,
      reAllow: function () {
        scrollHandling.allow = true;
      },
      delay: 50 //delay in milliseconds
    };




    // create indicator dots
    for (let i = 0; i < cardContainer.length; i++) {
      if (i === 0) {
        // add active class to first indicator
        indicatorContainer.append('<div class="vf-carousel-indicator vf-carousel-indicator-active"></div>');
      } else {
        indicatorContainer.append('<div class="vf-carousel-indicator"></div>');
      }
    }
    // creat attribute index to every card
    carouselContainer.children(cardContainer).each(function (i) {
      $(this).attr("index", i)
    });

    // detect if mouse is inside the carousel container div
    carouselContainer.mouseover(function () {

      hoverCarousel = true;
      // mousewheel/scroll button on mouse
      carouselContainer.on('wheel', function (event) {
        // fire only if the scroll is horizontal
        if (event.originalEvent.deltaX < 0 || event.originalEvent.deltaX > 0) {
          carouselContainer.scroll(() => {

            if (!hoverCarousel) {
              return
            }
            // Only run function if the mouse is hovering the carousel container div
            if (hoverCarousel) {
              if (scrollHandling.allow) {

                $().handleOverlay();
                scrollHandling.allow = false;
                setTimeout(scrollHandling.reAllow, scrollHandling.delay);
              }
            }
          })
        }
      });
    });

    carouselContainer.mouseleave(() => hoverCarousel = false);

    // mobile screen
    if (windowWidth < 576) {
      carouselContainer.scroll(() => {
        carouselContainer.children('.vf-carousel-card-container').each(async function (i, object) {

          // find index of the active card and pass it down to handleActiveIndicator which
          // highlight respective indicator dot
          const index = await findActiveCard(object);
          handleActiveIndicator(index)
        });
      })
    }


    // checks if the current (this) element is in viewport and within the bounds
    // used when scrolling horizontal.
    $.fn.isOnScreen = function () {

      const horizontalOffset = 120
      const win = $(window);
      const bounds = this.offset();
      const viewport = {
        left: win.scrollLeft()
      };

      viewport.right = viewport.left + win.width();
      viewport.right = viewport.right - horizontalOffset;
      viewport.left = viewport.left + horizontalOffset;
      bounds.right = bounds.left + this.outerWidth();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right));

    };


    const findActiveCard = (entries) => {
      return new Promise((resolve) => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (entry.intersectionRatio === 1) {
                const visibleIndex = entry.target.getAttribute('index')
                resolve(visibleIndex)
              }
              observer.unobserve(entry.target);
            }
          });
        });
        observer.observe(entries);

      });
    }


    function yo() {
      console.log("yo körs");



    }




    /**
     *  Used when clicking the arrow right/left and detect  if the carousel card is in viewport.
     * @return {boolean}
     */
    function HorizontallyBound($parentDiv, $childDiv) {
      const parentRect = $parentDiv[0].getBoundingClientRect();
      const childRect = $childDiv[0].getBoundingClientRect();
      return parentRect.right <= childRect.left;
    }

    // add or remove initial overlay when scrolling.
    $.fn.handleOverlay = function () {

      carouselContainer.children('.vf-carousel-card-container').each(function (index) {
        const currentElement = $(this);
        if (currentElement.isOnScreen()) {
          $(currentElement).removeClass('vf-carousel-next-slide-overlay')
        } else {
          $(currentElement).addClass('vf-carousel-next-slide-overlay')
        }
      })
    };

    // run on load to set initial overlay
    $().handleOverlay();

    // add or remove overlay when clicking the arrows
    function checkBoundsOnClick() {
      carouselContainer.children('.vf-carousel-card-container').each(function () {

        const currentElement = $(this);
        const inViewPort = HorizontallyBound(carouselContainer, currentElement)
        if (inViewPort) {
          $(currentElement).addClass('vf-carousel-next-slide-overlay')
        } else {
          $(currentElement).removeClass('vf-carousel-next-slide-overlay')
        }
      })
    }


    $('#left-arrow').click(previousSlide);
    $('#right-arrow').click(nextSlide);

    function nextSlide() {
      const $currentSlide = carouselContainer.find('div:first');
      const cardWidth = $currentSlide.width();
      const margin = $currentSlide.css("margin-right")
      const totalWidth = cardWidth + parseInt(margin)

      carouselContainer.animate({
        scrollLeft: `+=${totalWidth}px`
      }, "slow");
      hoverCarousel = false;
      checkBoundsOnClick();

    }

    function previousSlide() {
      const $currentSlide = carouselContainer.find('div:first');
      const cardWidth = $currentSlide.width();
      const margin = $currentSlide.css("margin-right")
      const totalWidth = cardWidth + parseInt(margin)
      carouselContainer.animate({
        scrollLeft: `-=${totalWidth}px`
      }, "slow");
      hoverCarousel = false;
      checkBoundsOnClick()
    }


    // adds or remove class to indicator if the carousel card is in viewport
    function handleActiveIndicator(index) {
      $(".vf-carousel-indicator").each(function (i, object) {
        let activeIndicator = $(this)
        if (parseInt(index) === i) {
          activeIndicator.addClass('vf-carousel-indicator-active')
        } else {
          activeIndicator.removeClass('vf-carousel-indicator-active')
        }
      });
    }


  })(jQuery);
});
