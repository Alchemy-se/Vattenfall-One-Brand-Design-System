### Localisation

[Date Range Picker](http://www.daterangepicker.com) uses jQuery. Add the following customisable jQuery to attach a date range picker to your `input` element. Be sure to keep the `parentEl` as the one you chose above (`.vf-calendar*`), or CSS will not be correctly applied. It is also important to set the `input` `name` to match the name on your input element.


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


