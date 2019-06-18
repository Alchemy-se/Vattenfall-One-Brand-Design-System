(function($){

console.log("werwe"); //Called twice. Jquery included twice?

	$('.vf-input').each(function( index ) {

		$(this).on('keyup',function(){

			if($(this).val().length === 0){

				if($(this).hasClass('vf-input--data')){
					$(this).removeClass('vf-input--data');
				}
			}
			else{
				//Input has been entered. Prevent label from returning to original position.
				if(!$(this).hasClass('vf-input--data')){
					$(this).addClass('vf-input--data');
				}
			}
		});

		if($(this).attr('type') == 'number'){ //use class instread...?
			

/*
			//minus not being inputted. Restricted by "number"?
			//Numbers only
			this.oninput = function(value){

				this.value = this.value.replace((/[^0-9.]/g), ''); //Does not allow minus
				this.value = this.value.replace(/(\..*)\./g, '$1');

			};
*/


			if (!$(this).siblings().hasClass('vf-input--number-decrement')) {
				$('<div class="vf-input--number-decrement"></div>').insertAfter(this);
			}

			if (!$(this).siblings().hasClass('vf-input--number-increment')) {
				$('<div class="vf-input--number-increment"></div>').insertAfter(this);
			}

			$('.vf-input--number-increment, .vf-input--number-decrement').unbind().on('click keyup',function(){ //unbind() Prevents double call

				if(!$(this).closest('.vf-input-container').find('.vf-input').hasClass("vf-input--data")){

					//Move label
					$(this).closest('.vf-input-container').find('.vf-input').addClass("vf-input--data");

				}

				if($(this).hasClass("vf-input--number-increment")){

					if($.isNumeric(this.parentNode.querySelector('.vf-input').value)){
						this.parentNode.querySelector('.vf-input').stepUp();
					}
					else{
						this.parentNode.querySelector('.vf-input').value = 1;
					}

				}

				else if($(this).hasClass("vf-input--number-decrement")){

					if($.isNumeric(this.parentNode.querySelector('.vf-input').value)){
						this.parentNode.querySelector('.vf-input').stepDown();
					}
					else{
						this.parentNode.querySelector('.vf-input').value = -1;
					}
				}

			});
		}

		if ($(this).data('tooltip')){

			let tooltip = $(this).data("tooltip");

			$('<div class="vf-input-tooltip-message">' + tooltip + '</div>').insertAfter(this);
			$('<div class="vf-input-tooltip-icon"></div>').insertAfter(this);

		}

	});

})(jQuery);