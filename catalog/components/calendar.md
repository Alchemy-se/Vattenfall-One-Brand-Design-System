//To Do:
//-buttons?
//-dropdown - vf version too big?


The calendar module utilises [Date Range Picker](http://www.daterangepicker.com). There are many settings that can be customised, and so if anything is not covered here, please consult the documentation there.

## Date Range

Simply create a `div` with class `vf-input-container` and a class that begins `vf-calendar` (eg. `vf-calendar`, `vf-calendar-one` or `vf-calendar-two` would be acceptable) and add an `input` element with a suitable name, then consult the [Localisation](#localisation) section.

```html
showSource: true
plain: false
---

  <div class="vf-calendar vf-input-container">

    <input class="vf-input" type="text" name="vf-daterange-localised" />

  </div>

```

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


#### Localisation Example - Sweden

The below is an example of how to localise a calendar for Sweden. Each word has been translated and week numbers have been set to display by adding `"showWeekNumbers": true`. The date format has also been changed to `"format": "YYYY/MM/DD"`, be sure to also change the `"startDate"` and `"endDate"` to match any changes in format. In this example, when the end date is selected the date range is automatically applied using `"autoApply": true`.

```html
showSource: true
plain: false
---

  <div class="vf-calendar-svenska vf-input-container">

    <input class="vf-input" type="text" name="vf-daterange-localised-svenska" />

  </div>

```

    $('input[name="vf-daterange-localised-svenska"]').daterangepicker({
      "autoApply": true,
      "showWeekNumbers": true,
      "locale": {
        "format": "YYYY/MM/DD",
        "separator": " - ",
        "applyLabel": "Godkänn",
        "cancelLabel": "Rensa",
        "fromLabel": "Från",
        "toLabel": "Till",
        "customRangeLabel": "Custom",
        "weekLabel": "V",
        "daysOfWeek": [
          "Sö",
          "Må",
          "Ti",
          "On",
          "To",
          "Fr",
          "Lö"
        ],
        "monthNames": [
          "Januari",
          "Februari",
          "Mars",
          "April",
          "Maj",
          "Juni",
          "Juli",
          "Augusti",
          "September",
          "Oktober",
          "November",
          "December"
        ],
        "firstDay": 1
      },
      "parentEl": ".vf-calendar-svenska",
      "startDate": "2019/08/01",
      "endDate": "2019/08/07"
      }, function(start, end, label) {
    });


## Single Date Selector

If you wish to have a single date selector, rather than a date range, simply add `singleDatePicker: true` to your jQuery. For ease of use, `showDropdowns: true` can also be added.

```html
showSource: true
plain: false
---

  <div class="vf-calendar-single vf-input-container">

    <input class="vf-input" type="text" name="vf-daterange-single" />

  </div>

```

    $('input[name="vf-daterange-localised-svenska"]').daterangepicker({
      "autoApply": true,
      "showWeekNumbers": true,
      "locale": {
        "format": "YYYY/MM/DD",
        "separator": " - ",
        "applyLabel": "Godkänn",
        "cancelLabel": "Rensa",
        "fromLabel": "Från",
        "toLabel": "Till",
        "customRangeLabel": "Custom",
        "weekLabel": "V",
        "daysOfWeek": [
          "Sö",
          "Må",
          "Ti",
          "On",
          "To",
          "Fr",
          "Lö"
        ],
        "monthNames": [
          "Januari",
          "Februari",
          "Mars",
          "April",
          "Maj",
          "Juni",
          "Juli",
          "Augusti",
          "September",
          "Oktober",
          "November",
          "December"
        ],
        "firstDay": 1
      },
      "parentEl": ".vf-calendar-svenska",
      "startDate": "01/08/2019",
      "endDate": "07/08/2019"
      }, function(start, end, label) {
    });

