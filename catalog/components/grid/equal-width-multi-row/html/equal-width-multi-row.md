
### Equal-width multi-row

Create equal-width columns that span multiple rows by inserting a `.w-100` where you want the columns to break to a new line. Make the breaks responsive by mixing the `.w-100` with some [responsive display utilities](/docs/utilities/display/).

```html
<div class="vf-row">
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
  <div class="w-100"></div>
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
</div>
```
