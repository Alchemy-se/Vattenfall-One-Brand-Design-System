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

### Textarea

To use a textarea, simply exchange the `input` element for a `textarea` one.

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <textarea rows="4" cols="50" id="vf_textarea_input" class="vf-input"></textarea>
    <label for="vf_textarea_input">Textarea Label</label>
  </div>
</div>
```

### Number

To use a number input, change the `input type` to `number`. The de/increment will be controlled by the step value, if given.

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

To add a Tooltip icon and text, simply add a `data-tooltip` data attribute with the required text to the `input` element. [Tooltip](/css/tooltip) styling classes must be applied to the `input` element. Available options:

* `vf-tooltip--blue`
* `vf-tooltip--red`
* `vf-tooltip--blue-solid`
* `vf-tooltip--green-solid`
* `vf-tooltip--red-solid`
* `vf-tooltip--yellow-solid`
* `vf-tooltip--left`
* `vf-tooltip--right`
* `vf-tooltip--bottom`


```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <input type="text" id="vf_tooltip_input" class="vf-input" data-tooltip="Tooltip text">
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