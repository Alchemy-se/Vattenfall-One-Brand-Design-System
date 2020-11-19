$(document).ready(function () {
  (function ($) {

    let isOver = false
    $("#vf-carousel-container").mouseover(function () {
      isOver = true
      console.log("mouse over");
      $("#vf-carousel-container").on('wheel', function (event) {
        if (event.originalEvent.deltaX < 0 || event.originalEvent.deltaX > 0) {
          //console.log('event.originalEvent.deltaX: ', event.originalEvent.deltaX)
          // add or remove overlay on horizontal scroll

          $("#vf-carousel-container").scroll(
            function () {
              console.log("körs ej vid click");
              /*  console.log('event.originalEvent.deltaX: ', event.originalEvent.deltaX)*/
              if (isOver) {
                console.log('isOver: ', isOver)
                console.log("körs ej vid click");


                $().handleOverlay();
              }
            })

        }

      });

    });

    $('#vf-carousel-container').mouseleave(function () {
      console.log("LEAVE");

      isOver = false

      console.log('isOver: ', isOver)


    })


    // checks if the current (this) element is in viewport and within the bounds
    //used when scrolling
    $.fn.isOnScreen = function (elemWidth) {

      const horizontalOffset = 120
      var win = $(window);

      var viewport = {
        left: win.scrollLeft()
      };
      viewport.right = viewport.left + win.width();

      viewport.right = viewport.right - horizontalOffset;
      viewport.left = viewport.left + horizontalOffset;
      var bounds = this.offset();
      bounds.right = bounds.left + this.outerWidth();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right));

    };


    // Used when clicking

    /**
     * @return {boolean}
     */
    function HorizontallyBound($parentDiv, $childDiv) {
      const parentRect = $parentDiv[0].getBoundingClientRect();
      const childRect = $childDiv[0].getBoundingClientRect();
      return parentRect.left >= childRect.right || parentRect.right <= childRect.left;
    }

    // add or remove initial overlay when scrolling.
    $.fn.handleOverlay = function () {

      $('#vf-carousel-container').children('.vf-carousel-card-container').each(function () {

        const currentElement = $(this);


        if (currentElement.isOnScreen(currentElement.width())) {
          $(currentElement).removeClass('vf-carousel-card-overlay')
        } else {
          $(currentElement).addClass('vf-carousel-card-overlay')
        }
      })
    };

    function checkBoundsOnClick() {
      $('#vf-carousel-container').children('.vf-carousel-card-container').each(function () {
        const currentElement = $(this);
        const inViewPort = HorizontallyBound($('#vf-carousel-container'), currentElement)
        if (inViewPort) {
          $(currentElement).addClass('vf-carousel-card-overlay')
        } else {
          $(currentElement).removeClass('vf-carousel-card-overlay')
        }
      })
    }

    // run on load to set initial overlay
   // $().handleOverlay();


    $('#left-arrow').click(previousSlide);
    $('#right-arrow').click(nextSlide);

    function nextSlide() {
      const $currentSlide = $('#vf-carousel-container').find('div:first');
      const cardWidth = $currentSlide.width();
      const margin = $currentSlide.css("margin-right")
      const totalWidth = cardWidth + parseInt(margin)

      $('#vf-carousel-container').animate({
        scrollLeft: `+=${totalWidth}px`
      }, "slow");
      checkBoundsOnClick()

    }

    function previousSlide() {
      const $currentSlide = $('#vf-carousel-container').find('div:first');
      const cardWidth = $currentSlide.width();
      const margin = $currentSlide.css("margin-right")
      const totalWidth = cardWidth + parseInt(margin)
      $('#vf-carousel-container').animate({
        scrollLeft: `-=${totalWidth}px`
      }, "slow");
      checkBoundsOnClick()
    }


    const cardContainer = $('.vf-carousel-card-container');
    console.log('l: ', cardContainer);

    const dotsContainer = $('.vf-carousel-dots');

    for (let i = 0; i < cardContainer.length; i++) {


      // create dots
      dotsContainer.append('<div class="vf-carousel-dot"></div>');
      if (i === 3) {
        console.log('dotsContainer.index(): ', dotsContainer.index())

      }

    }


  })(jQuery);
});
