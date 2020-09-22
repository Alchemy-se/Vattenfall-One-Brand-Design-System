
### Variable width content

Use `col-{breakpoint}-auto` classes to size columns based on the natural width of their content.

```html
<div class="vf-container">
  <div class="row justify-content-md-center">
    <div class="vf-col vf-col-lg-2">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">1 of 3</div>
    </div>
    <div class="vf-col-md-auto">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Variable width content</div>
    </div>
    <div class="vf-col vf-col-lg-2">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">3 of 3</div>
    </div>
  </div>
  <div class="vf-row">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">1 of 3</div>
    </div>
    <div class="vf-col-md-auto">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Variable width content</div>
    </div>
    <div class="vf-col vf-col-lg-2">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">3 of 3</div>
    </div>
  </div>
</div>
```
