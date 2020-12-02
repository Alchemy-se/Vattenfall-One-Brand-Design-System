(function($){

	$('.vf-notification-module-icon').unbind().on('click keyup',function(e){
        $(this).siblings('.vf-notification-module').toggleClass('vf-notification-module--show');

        $(this).siblings('.vf-notification-module').attr('aria-expanded', function(index, attr){
		    return attr == "true" ? false : "true";
		});

        e.stopPropagation();
    });

    $(document).click(function(e) {
        if (!$(e.target).is('.vf-notification-module *')) {
            $(".vf-notification-module").removeClass('vf-notification-module--show').attr("aria-expanded","false");
        }
    });

})(jQuery);
