(function($){

	$(".vf-input").each(function( index ) {

		if ($(this).data("tooltip")){

			let tooltip = $(this).data("tooltip");

			$('<div class="vf-input-tooltip-message">' + tooltip + '</div>').insertAfter(this);
			$('<div class="vf-input-tooltip-icon"></div>').insertAfter(this);

		}

	});

})(jQuery);