(function($){

	$(".vf-input").each(function( index ) {

		if($(this).attr('type') == "number"){
			$('<div class="vf-input--number-decrement" onclick="if($.isNumeric(parentNode.querySelector(\'.vf-input\').value)){parentNode.querySelector(\'.vf-input\').stepDown()}else{parentNode.querySelector(\'.vf-input\').value = 0}"></div>').insertAfter(this);
			$('<div class="vf-input--number-increment" onclick="if($.isNumeric(parentNode.querySelector(\'.vf-input\').value)){parentNode.querySelector(\'.vf-input\').stepUp()}else{parentNode.querySelector(\'.vf-input\').value = 0}"></div>').insertAfter(this);
			
			$('.vf-input--number-increment, .vf-input--number-decrement').on('click keyup',function(){
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
			//$(this).attr('size', $(this).attr('placeholder').length + 3);
			$(this).attr('size', $(this).attr('placeholder').length);


			//If label does not exist, create one from the placeholder.
			if (!$(this).siblings('label').length){

				//Insert placeholder text above input
				let placeholder = $(this).attr('placeholder');

				//If input has ID, add "for".
				let forAttr = "";
				if ($(this).attr("id")){
					forAttr = 'for="' + $(this).attr("id") + '"';
				}

				$('<label ' + forAttr + '>' + placeholder + '</label>').insertAfter(this);

			}

			//Show / hide
			$(this).on('keyup',function(){
			    if($(this).val().length > 0){
					$(this).siblings('label').css("opacity", "1");
				}
				else if($(this).val().length === 0){
					$(this).siblings('label').css("opacity", "0");
				}
		    });

		    
		}

	});

})(jQuery);