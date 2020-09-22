
## Alignment

Use flexbox alignment utilities to vertically and horizontally align columns.

### Vertical alignment

```html
<div class="vf-container">
  <div class="row align-items-start">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
  </div>
  <div class="row align-items-center">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
  </div>
  <div class="row align-items-end">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
  </div>
</div>
```

```html
<div class="vf-container">
  <div class="vf-row">
    <div class="vf-col align-self-start">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col align-self-center">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col align-self-end">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
  </div>
</div>
```
