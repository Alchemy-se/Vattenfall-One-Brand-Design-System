
### Mix and match

Don't want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.

```html
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="vf-row">
  <div class="vf-col-12 vf-col-md-8">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-12 .vf-col-md-8</div>
  </div>
  <div class="vf-col-6 vf-col-md-4">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-6 .vf-col-md-4</div>
  </div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="vf-row">
  <div class="vf-col-6 vf-col-md-4">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-6 .vf-col-md-4</div>
  </div>
  <div class="vf-col-6 vf-col-md-4">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-6 .vf-col-md-4</div>
  </div>
  <div class="vf-col-6 vf-col-md-4">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-6 .vf-col-md-4</div>
  </div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="vf-row">
  <div class="vf-col-6">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-6</div>
  </div>
  <div class="vf-col-6">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-6</div>
  </div>
</div>
```
