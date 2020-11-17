$(document).ready(function () {

  (function ($) {


    $(document).ready(function () {

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
        var $currentSlide = $('#vf-carousel-container').find('div:first');
        var width = $currentSlide.width();
        $currentSlide.animate({ marginLeft: -width }, 500, function () {
          var $lastSlide = $('#vf-carousel-container').find('div:last')
          $lastSlide.after($currentSlide);
          $currentSlide.css({ marginLeft: 0 })
        });
      }

      function previousSlide() {
        var $currentSlide = $('#vf-carousel-container').find('div:first');
        var width = $currentSlide.width();
        var $previousSlide = $('#vf-carousel-container').find('div:last')
        $previousSlide.css({ marginLeft: -width })
        $currentSlide.before($previousSlide);
        $previousSlide.animate({ marginLeft: 0 }, 500);
      }


    })


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


    /*  const cardContainer = $('.vf-carousel-card-container');
      console.log('l: ', cardContainer);

      const dotsContainer = $('.vf-carousel-dots');

      for (let i = 0; i < cardContainer.length; i++) {


        // create dots
        dotsContainer.append('<div class="vf-carousel-dot"></div>');

      }*/


  })(jQuery);
});
