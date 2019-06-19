Input fields.

### Standard


```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <input type="text" id="vf_standard_input" class="vf-input">
    <label for="vf_standard_input">Standard Label</label>
  </div>
</div>
```

### Number

To use a number input, change the `input type` to `number`:

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <input type="number" id="vf_number_input" class="vf-input">
    <label for="vf_number_input">Number Label</label>
  </div>
</div>
```

### Underline style

To use the underline style, simply add the modifier class `vf-input--underline` to the `input` element.

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <input type="text" id="vf_underline_input" class="vf-input vf-input--underline">
    <label for="vf_underline_input">Underline Label</label>
  </div>
</div>
```

### With Tooltip

To add a tooltip icon and text, simply add the modifier class `vf-input--tooltip` to the `input` element, and add a `data-tooltip` data attribute with the required text.

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <input type="text" id="vf_tooltip_input" class="vf-input vf-input--tooltip" data-tooltip="Tooltip text123">
    <label for="vf_tooltip_input">Tooltip Label</label>
  </div>
</div>
```

### Warning State

To display a warning state, simply add the modifier class `vf-input--warning` to the `input` element

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <input type="text" id="vf_warning_state_input" class="vf-input vf-input--warning">
    <label for="vf_warning_state_input">Warning State Label</label>
  </div>
</div>
```

### Error State

To display an error state, simply add the modifier class `vf-input--error` to the `input` element

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <input type="text" id="vf_error_state_input" class="vf-input vf-input--error">
    <label for="vf_error_state_input">Error State Label</label>
  </div>
</div>
```