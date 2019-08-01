The calendar module utilises [Date Range Picker](http://www.daterangepicker.com). There are many settings that can be customised, and so if anything is not covered here, please consult the documentation there.

## Standard

Simply create a `div` with classes `vf-calendar` & `vf-input-container` and add an `input` element with a suitable name, then consult the [Localisation](#localisation) section.

### Localisation

[Date Range Picker](http://www.daterangepicker.com) uses jQuery. Add the following customisable jQuery to attach a date range picker to your `input` element. Be sure to keep the `parentEl` as `.vf-calendar`, or CSS will not be correctly applied.


    $('input[name="vf-daterange-standard"]').daterangepicker({
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


```html
showSource: true
plain: false
---

  <div class="vf-calendar vf-input-container">

    <input class="vf-input" type="text" name="vf-daterange-localised" />

  </div>

```



