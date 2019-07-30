(function($){

	$('.vf-input').each(function( index ) {

		$(this).on('keyup',function(){

			if($(this).val().length === 0){

				if($(this).hasClass('vf-input--data')){
					$(this).removeClass('vf-input--data');
				}
			}
			else{
				//Prevent label from returning to original position.
				if(!$(this).hasClass('vf-input--data')){
					$(this).addClass('vf-input--data');
				}
			}
		});

		if($(this).attr('type') == 'number'){
			
			if (!$(this).siblings().hasClass('vf-input--number-decrement')) {
				$('<div class="vf-input--number-decrement vf-icon-down"></div>').insertAfter(this);
			}

			if (!$(this).siblings().hasClass('vf-input--number-increment')) {
				$('<div class="vf-input--number-increment vf-icon-up"></div>').insertAfter(this);
			}

			$('.vf-input--number-increment, .vf-input--number-decrement').unbind().on('click keyup',function(){

				if(!$(this).closest('.vf-input-container').find('.vf-input').hasClass("vf-input--data")){

					//Move label
					$(this).closest('.vf-input-container').find('.vf-input').addClass("vf-input--data");

				}

				if($(this).hasClass("vf-input--number-increment")){

					if($.isNumeric(this.parentNode.querySelector('.vf-input').value)){

						this.parentNode.querySelector('.vf-input').value = Number(this.parentNode.querySelector('.vf-input').value) + Number(1);
					}
					else{
						this.parentNode.querySelector('.vf-input').value = 1;
					}

				}

				else if($(this).hasClass("vf-input--number-decrement")){

					if($.isNumeric(this.parentNode.querySelector('.vf-input').value)){

						this.parentNode.querySelector('.vf-input').value = Number(this.parentNode.querySelector('.vf-input').value) - Number(1);

					}
					else{
						this.parentNode.querySelector('.vf-input').value = -1;
					}
				}

			});
		}

	});

})(jQuery);