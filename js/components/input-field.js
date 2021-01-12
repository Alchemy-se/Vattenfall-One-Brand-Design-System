(function ($) {
  $('.vf-input').each(function (index) {
    $(this).on('blur', function () {
      if ($(this).val().length > 0) {
        if ($(this).hasClass('vf-input--underline')) {
          $(this).addClass('vf-input--blured-label vf-input--blured-underline')
        } else if ($(this).hasClass('vf-input--warning')) {
          $(this).addClass('vf-input--blured-label vf-input--blured-warning')
        } else if ($(this).hasClass('vf-input--error')) {
          $(this).addClass('vf-input--blured-label vf-input--blured-error')
        } else {
          $(this).addClass('vf-input--blured-label vf-input--blured-standard')

        }
      }
    });

    $(this).on('focus', function () {
      $(this).removeClass(function (index, className) {
        return (className.match(/(^|\s)vf-input--blured\S+/g) || []).join(' ');
      });
    });


    $(this).on('keyup', function () {

      if ($(this).val().length === 0) {

        if ($(this).hasClass('vf-input--data')) {
          $(this).removeClass('vf-input--data');
        }
      } else {
        //Prevent label from returning to original position.
        if (!$(this).hasClass('vf-input--data')) {
          $(this).addClass('vf-input--data');
        }
      }
    });

    if ($(this).attr('type') == 'number') {

      //stepUp() & stepDown() errors on IE11 - get Step value. Default 1.
      var stepValue = 1;
      if (this.getAttribute('step')) {
        stepValue = this.getAttribute('step');
      }

      if (!$(this).siblings().hasClass('vf-input--number-decrement')) {
        $('<div class="vf-input--number-decrement vf-icon-down"></div>').insertAfter(this);
      }

      if (!$(this).siblings().hasClass('vf-input--number-increment')) {
        $('<div class="vf-input--number-increment vf-icon-up"></div>').insertAfter(this);
      }

      $('.vf-input--number-increment, .vf-input--number-decrement').unbind().on('click keyup', function () {

        if (!$(this).closest('.vf-input-container').find('.vf-input').hasClass("vf-input--data")) {

          //Move label
          $(this).closest('.vf-input-container').find('.vf-input').addClass("vf-input--data");

        }

        if ($(this).hasClass("vf-input--number-increment")) {

          if ($.isNumeric(this.parentNode.querySelector('.vf-input').value)) {

            this.parentNode.querySelector('.vf-input').value = Number(this.parentNode.querySelector('.vf-input').value) + Number(stepValue);
          } else {
            this.parentNode.querySelector('.vf-input').value = stepValue;
          }

        } else if ($(this).hasClass("vf-input--number-decrement")) {

          if ($.isNumeric(this.parentNode.querySelector('.vf-input').value)) {

            this.parentNode.querySelector('.vf-input').value = Number(this.parentNode.querySelector('.vf-input').value) - Number(stepValue);

          } else {
            this.parentNode.querySelector('.vf-input').value = -Math.abs(stepValue);
          }
        }

      });
    }

  });

})(jQuery);
