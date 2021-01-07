
## Single Date Selector

If you wish to have a single date selector, rather than a date range, simply add `singleDatePicker: true` to your jQuery.

```html
showSource: true
plain: false
---

  <div class="vf-calendar-single vf-input-container">

    <input class="vf-input" type="text" name="vf-daterange-single" />

  </div>

```

    $('input[name="vf-daterange-single"]').daterangepicker({
      "singleDatePicker": true,
      "autoApply": true,
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
      "parentEl": ".vf-calendar-single",
      "startDate": "01/08/2019",
      "endDate": "07/08/2019"
      }, function(start, end, label) {
    });
