(function($){
  var isDetailsShowing = false;
  
	$(".vf-gdpr-consent-module__expand-button").unbind().on("click", function() {
    isDetailsShowing = !isDetailsShowing;
    
    if (isDetailsShowing) {
      $(this).addClass("is-expanded");
      $(".vf-gdpr-consent-module__details-content").addClass("is-showing");
    } else {
      $(this).removeClass("is-expanded");
      $(".vf-gdpr-consent-module__details-content").removeClass("is-showing");
    }
	});
})(jQuery);