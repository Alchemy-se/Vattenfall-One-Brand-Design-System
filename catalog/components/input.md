Input fields.

### Standard

If a label is added, it will be hidden until input.

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <input type="text" class="vf-input" placeholder="Standard Input Placeholder" id="with_label">
    <label for="with_label">Standard Label</label>
  </div>
</div>
```

### No label

If no label is added, but a placeholder is, a label will be generated and will appear above the field on input. If an ID is added, the corresponding "for" attribute will be added to the generated label.

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <input type="text" class="vf-input" placeholder="Standard Input Placeholder" id="standard">
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