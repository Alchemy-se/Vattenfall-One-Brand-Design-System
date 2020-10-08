
## Responsive classes

VF Design System's grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on small, medium, large, or extra large devices however you see fit.

### All breakpoints

For grids that are the same from the smallest of devices to the largest, use the `.vf-col` and `.vf-col-*` classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to `.vf-col`.

```html
<div class="vf-row">
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
</div>
<div class="vf-row">
  <div class="vf-col-8">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-8</div>
  </div>
  <div class="vf-col-4">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-4</div>
  </div>
</div>
```
