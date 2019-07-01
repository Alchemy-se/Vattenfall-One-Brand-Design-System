(function($){

	$('[data-tooltip]').each(function(){

		let tooltip = $(this).data('tooltip');

		if($(this).is('input')){
			//Pseudo-elements are not allowed on input elements.
			$('<div class="vf-tooltip-message">' + tooltip + '</div>').insertAfter(this);
			$('<div class="vf-input-tooltip-icon vf-icon-question"></div>').insertAfter(this);

		}

		else{

			$(this).append('<div class="vf-tooltip-message">' + tooltip + '</div>');

		}

	})

})(jQuery);