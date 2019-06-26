(function($){

	$('.vf-tab-bar-item').each(function( index ) {

		if($(this).hasClass('vf-tab-bar-item--active')){

			$(this).find('.vf-tab-bar-link').clone().addClass('vf-tab-bar-link-mobile vf-tab-bar-link-mobile--active').removeClass('vf-tab-bar-link').removeAttr('aria-selected tabindex').insertAfter($(this));

		}

		else{

			$(this).find('.vf-tab-bar-link').clone().addClass('vf-tab-bar-link-mobile').removeClass('vf-tab-bar-link').removeAttr('aria-selected tabindex').insertAfter($(this));

		}

	});

	$('.vf-tab-bar-item').unbind().on('click keyup',function(){

		if(!$(this).hasClass('vf-tab-bar-item--disabled')){

			$(this).addClass('vf-tab-bar-item--active').attr({'aria-selected':'true', 'tabindex':'0'}).siblings().removeClass('vf-tab-bar-item--active').attr({'aria-selected':'false', 'tabindex':'-1'});

			$(this).nextAll('.vf-tab-bar-link-mobile:first').addClass('vf-tab-bar-link-mobile--active').siblings('.vf-tab-bar-link-mobile').removeClass('vf-tab-bar-link-mobile--active');
		}

	});

})(jQuery);