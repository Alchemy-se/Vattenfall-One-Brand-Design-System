(function($){

	$('input[name="vf-daterange-localised"]').daterangepicker({
		"locale": {
			"format": "DD/MM/YYYY",
			"separator": " - ",
			"applyLabel": "Apply",
			"cancelLabel": "Cancel",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			"monthNames": [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			],
			"firstDay": 1
		},
		"parentEl": ".vf-calendar",
		"startDate": "01/08/2019",
		"endDate": "07/08/2019"
		}, function(start, end, label) {

	});

})(jQuery);