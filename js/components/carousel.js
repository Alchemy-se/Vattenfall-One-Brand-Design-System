$(document).ready(function () {
  (function ($) {


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

    let carouselContainer = $('#vf-carousel-container');

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




    /**
     *  Used when clicking the arrow right/left and detect  if the carousel card is in viewport.
     * @return {boolean}
     */
    function HorizontallyBound($parentDiv, $childDiv) {
      const parentRect = $parentDiv[0].getBoundingClientRect();
      const childRect = $childDiv[0].getBoundingClientRect();
      return /*parentRect.left >= childRect.right || */parentRect.right <= childRect.left;
    }

    // add or remove initial overlay when scrolling.
    $.fn.handleOverlay = function () {
      carouselContainer.children('.vf-carousel-card-container').each(function () {
        const currentElement = $(this);
        if (currentElement.isOnScreen()) {
          $(currentElement).removeClass('vf-carousel-card-overlay')
        } else {
          $(currentElement).addClass('vf-carousel-card-overlay')
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
          $(currentElement).addClass('vf-carousel-card-overlay')
        } else {
          $(currentElement).removeClass('vf-carousel-card-overlay')
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


    const cardContainer = $('.vf-carousel-card-container');
    console.log('l: ', cardContainer);

    const indicatorContainer = $('.vf-carousel-indicator-container');

    for (let i = 0; i < cardContainer.length; i++) {


      // create dots
      indicatorContainer.append('<div class="vf-carousel-indicator"></div>');
      if (i === 3) {
        console.log('dotsContainer.index(): ',indicatorContainer.index())
        $('.vf-carousel-indicator').addClass("vf-carousel-indicator-active")

      }

    }


  })(jQuery);
});
