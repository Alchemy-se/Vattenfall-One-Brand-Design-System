
## Auto-layout columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like `.vf-col-sm-6`.

### Equal-width

Here are two grid layout examples that apply to every device and viewport, from `xs` to `xl`. Add any number of unit-less classes for each breakpoint you need, and every column will be the same width.

```html
<div class="vf-container">
  <div class="vf-row">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">1 of 2</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">2 of 2</div>
    </div>
  </div>
  <div class="vf-row">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">1 of 3</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">2 of 3</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">3 of 3</div>
    </div>
  </div>
</div>
```

Equal width columns can be broken into multiple lines, but there was a [Safari flexbox bug](https://github.com/philipwalton/flexbugs#flexbug-11) that prevented this from working without an explicit `flex-basis` or `border`. There are workarounds for older browser versions, but they shouldn’t be necessary if you’re up to date.

```html
<div class="vf-container">
  <div class="vf-row">
    <div class="vf-col"><div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Column</div></div>
    <div class="vf-col"><div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Column</div></div>
    <div class="w-100"></div>
    <div class="vf-col"><div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Column</div></div>
    <div class="vf-col"><div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Column</div></div>
  </div>
</div>
```
