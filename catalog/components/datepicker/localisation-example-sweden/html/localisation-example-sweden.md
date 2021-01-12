
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
