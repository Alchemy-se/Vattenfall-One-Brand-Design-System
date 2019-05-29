Input fields.

### Standard

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <input type="text" class="vf-input" placeholder="Input label" data-tooltip="Tooltip text123">
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
    <input type="text" class="vf-input vf-input--underline">
  </div>
</div>
```

### With Tooltip

To add a tooltip icon and text..... MORE HERE

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container" title="Tooltip text">
    <input type="text" class="vf-input vf-input--tooltip" placeholder="Input label">
  </div>
</div>
```

### Warning State

```html
showSource: true
---

<div class="vf-row">
  
  <input type="text" class="vf-input vf-input--warnining" placeholder="Input label" >

</div>
```

### Error State

```html
showSource: true
---

<div class="vf-row">
  
  <input type="text" class="vf-input vf-input--error" placeholder="Input label" >

</div>
```