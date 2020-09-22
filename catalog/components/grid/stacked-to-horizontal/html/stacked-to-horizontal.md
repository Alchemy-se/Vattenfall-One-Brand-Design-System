
### Stacked to horizontal

Using a single set of `.vf-col-sm-*` classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (`sm`).

```html
<div class="vf-row">
  <div class="vf-col-sm-8">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-sm-8</div>
  </div>
  <div class="vf-col-sm-4">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-sm-4</div>
  </div>
</div>
<div class="vf-row">
  <div class="vf-col-sm">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-sm</div>
  </div>
  <div class="vf-col-sm">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-sm</div>
  </div>
  <div class="vf-col-sm">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-sm</div>
  </div>
</div>
```
