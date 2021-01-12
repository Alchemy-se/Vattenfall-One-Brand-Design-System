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
