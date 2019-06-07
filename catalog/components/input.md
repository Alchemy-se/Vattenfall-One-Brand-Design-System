Input fields.

### Standard

If a placeholder is added, it will automatically be displayed as a label on input.

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <input type="text" class="vf-input" placeholder="Standard Input Placeholder">
  </div>
</div>
```

### Number

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <input type="number" class="vf-input" placeholder="Number Input Placeholder">
  </div>
</div>
```

### Underline style

To use the underline style, simply add the modifier class `vf-input--underline` to the `input` element.

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container" title="Tooltip text">
    <input type="text" class="vf-input vf-input--underline" placeholder="Underline Style Input Placeholder">
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
    <input type="text" class="vf-input vf-input--tooltip" placeholder="Input with Tooltip Placeholder" data-tooltip="Tooltip text123">
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
    <input type="text" class="vf-input vf-input--warning" placeholder="Input with Warning State Placeholder" >
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
    <input type="text" class="vf-input vf-input--error" placeholder="Input with Error State Placeholder" >
  </div>
</div>
```