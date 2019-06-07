(function($){

	$(".vf-input").each(function( index ) {

		if($(this).attr('type') == "number"){
			$('<div class="vf-input--number-decrement" onclick="if($.isNumeric(parentNode.querySelector(\'.vf-input\').value)){parentNode.querySelector(\'.vf-input\').stepDown()}else{parentNode.querySelector(\'.vf-input\').value = 0}"></div>').insertAfter(this);
			$('<div class="vf-input--number-increment" onclick="if($.isNumeric(parentNode.querySelector(\'.vf-input\').value)){parentNode.querySelector(\'.vf-input\').stepUp()}else{parentNode.querySelector(\'.vf-input\').value = 0}"></div>').insertAfter(this);
			
			$('.vf-input--number-increment, .vf-input--number-decrement').on('click',function(){
				//$(this).siblings('.vf-input').val()
				$(this).siblings('.vf-input-tooltip-placeholder').css("opacity", "1");

			});

		}

		if ($(this).data("tooltip")){

			let tooltip = $(this).data("tooltip");

			$('<div class="vf-input-tooltip-message">' + tooltip + '</div>').insertAfter(this);
			$('<div class="vf-input-tooltip-icon"></div>').insertAfter(this);

		}

		if ($(this).attr("placeholder")){

			//Allow the input to grow according to placeholder size. CSS min-width 264px;
			$(this).attr('size', $(this).attr('placeholder').length + 3);

			//Insert placeholder text above input
			let placeholder = $(this).attr('placeholder');
			$('<div class="vf-input-tooltip-placeholder">' + placeholder + '</div>').insertAfter(this);

			//Show / hide
			$(this).on('keyup',function(){
			    if($(this).val().length > 0){
					$(this).siblings('.vf-input-tooltip-placeholder').css("opacity", "1");
				}
				else if($(this).val().length === 0){
					$(this).siblings('.vf-input-tooltip-placeholder').css("opacity", "0");
				}
		    });

		    
		}

	});

})(jQuery);