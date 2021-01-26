
### Gutters

Gutters can be responsively adjusted by breakpoint-specific padding and negative margin utility classes. To change the gutters in a given row, pair a negative margin utility on the `.row` and matching padding utilities on the `.vf-col`s.

Here’s an example of customizing the Vattenfall Digital Design System grid at the large (`lg`) breakpoint and above. We’ve increased the `.vf-col` padding with `.px-lg-5` and then counteracted that with `.mx-lg-n5` on the parent `.row`.

```html
<div class="row mx-lg-n5">
  <div class="vf-col py-3 px-lg-5 border bg-light">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Custom column padding</div>
  </div>
  <div class="vf-col py-3 px-lg-5 border bg-light">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Custom column padding</div>
  </div>
</div>
```
