


### Negative margin

In CSS, `margin` properties can utilize negative values (`padding` cannot). As of 4.2, we've added negative margin utilities for every non-zero integer size listed above (e.g., `1`, `2`, `3`, `4`, `5`). These utilities are ideal for customizing grid column gutters across breakpoints.

The syntax is nearly the same as the default, positive margin utilities, but with the addition of `n` before the requested size.

```
.mt-n1 {
  margin-top: -0.25rem !important;
}
```

Here’s an example of customizing the DDS grid at the medium (`md`) breakpoint and above. We’ve increased the `.col` padding with `.px-md-5` and then counteracted that with `.mx-md-n5` on the parent `.row`.

```html
showSource: true
---
<div class="row mx-md-n5">
  <div class="col py-3 px-md-5 border bg-light">Custom column padding</div>
  <div class="col py-3 px-md-5 border bg-light">Custom column padding</div>
</div>
```
