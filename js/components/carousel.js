$(document).ready(function () {

  (function ($) {



    // checks if the current (this) element is in viewport and within the bounds
    $.fn.isOnScreen = function (currentElement) {
      console.log('currentElement: ', currentElement);


      //console.log('elemWidth: ', elemWidth);
      const horizontalOffset = currentElement.width() / 2
      console.log('horizontalOffset: ', horizontalOffset)
      var win = $(window);

      var viewport = {
        // top: win.scrollTop(),
        left: win.scrollLeft()
      };
      viewport.right = viewport.left + win.width();


      viewport.right = viewport.right - horizontalOffset;
      viewport.left = viewport.left + horizontalOffset;
      var bounds = this.offset();
      bounds.right = bounds.left + this.outerWidth();

      console.log('this.offset(): ', this.offset());
      console.log('this.position(): ', this.position());
      console.log('viewport.right: ', viewport.right);
      console.log('bounds.left: ', bounds.left);
      console.log('win.scrollLeft(): ', win.scrollLeft())


      if(viewport.right){

      }
      return !viewport.right < bounds.left || viewport.left > bounds.right;

    };


    // add or remove initial overlay when scrolling.
     $.fn.handleOverlay = function () {
       console.log("handleOverlay clicked");


      $('#vf-carousel-container').children('.vf-carousel-card-container').each(function () {

        const currentElement = $(this);
        if (currentElement.isOnScreen(currentElement)) {
          $(currentElement).removeClass('vf-carousel-card-overlay')
        } else {
          $(currentElement).addClass('vf-carousel-card-overlay')
        }
      })
    };

    // run on load to set initial overlay
    $().handleOverlay();

    // add or remove overlay on horizontal scroll
    $("#vf-carousel-container").scroll(function () {
      $().handleOverlay();
    })


    // var interval = window.setInterval(rotateSlides, 3000)


    /*function rotateSlides() {
      var $firstSlide = $('#vf-carousel-container').find('div:first');
      var width = $firstSlide.width();

      $firstSlide.animate({ marginLeft: -width }, 1000, function () {
        var $lastSlide = $('#vf-carousel-container').find('div:last')
        $lastSlide.after($firstSlide);
        $firstSlide.css({ marginLeft: 0 })
      })
    }*/

    //rotateSlides()

    $('#left-arrow').click(previousSlide);
    $('#right-arrow').click(nextSlide);

    function nextSlide() {
      console.log("next");
      $().handleOverlay();

      var $currentSlide = $('#vf-carousel-container').find('div:first');
      //$currentSlide.removeClass('vf-carousel-next-slide-overlay')
      console.log('$currentSlide: ', $currentSlide)
      var width = $currentSlide.width();


      $currentSlide.animate({ marginLeft: -width }, 500, function () {
        var $lastSlide = $('#vf-carousel-container').find('.vf-carousel-card-container:last-child')
        console.log('$lastSlide: ', $lastSlide);
        $lastSlide.after($currentSlide);

        //$lastSlide.addClass('vf-carousel-next-slide-overlay');

        $currentSlide.css({ marginLeft: 0 })
      });
    }

    function previousSlide() {
      console.log("prev");
      $().handleOverlay();

      var $currentSlide = $('#vf-carousel-container').find('div:first');
      var width = $currentSlide.width();
      var $previousSlide = $('#vf-carousel-container').find('.vf-carousel-card-container:last-child')
      $previousSlide.css({ marginLeft: -width })
      $currentSlide.before($previousSlide);
      $previousSlide.animate({ marginLeft: 0 }, 500);
    }

    /* console.log("hej");
     $('#left-arrow').click(function () {
       console.log("left arrow clicked");
     });
     $('#right-arrow').click(function () {
       console.log("right arrow clicked");
     });

     function rotateSlides() {
       const $firstSlide = $('#vf-carousel-container').find('div:first');
       const width = $firstSlide.width();
       console.log('width: ', width)
       console.log('$firstSlide: ', $firstSlide)
       $firstSlide.animate({ marginLeft: -width }, 1000, function () {
         const $lastSlide = $('#vf-carousel-container').find('div:last')
         $lastSlide.after($firstSlide);
         $firstSlide.css({marginLeft: 0})

       })
     }*/


      const cardContainer = $('.vf-carousel-card-container');
      console.log('l: ', cardContainer);

      const dotsContainer = $('.vf-carousel-dots');

      for (let i = 0; i < cardContainer.length; i++) {


        // create dots
        dotsContainer.append('<div class="vf-carousel-dot"></div>');

      }


  })(jQuery);
});
