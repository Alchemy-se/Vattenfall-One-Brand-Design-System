
### Column breaks

Breaking columns to a new line in flexbox requires a small hack: add an element with `width: 100%` wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple `.row`s, but not every implementation method can account for this.

```html
<div class="vf-row">
  <div class="vf-col-6 vf-col-sm-3">.vf-col-6 .vf-col-sm-3</div>
  <div class="vf-col-6 vf-col-sm-3">.vf-col-6 .vf-col-sm-3</div>

  <!-- Force next columns to break to new line -->
  <div class="w-100"></div>

  <div class="vf-col-6 vf-col-sm-3">.vf-col-6 .vf-col-sm-3</div>
  <div class="vf-col-6 vf-col-sm-3">.vf-col-6 .vf-col-sm-3</div>
</div>
```

You may also apply this break at specific breakpoints with our [responsive display utilities](/docs/utilities/display/).

```html
<div class="vf-row">
  <div class="vf-col-6 vf-col-sm-4">.vf-col-6 .vf-col-sm-4</div>
  <div class="vf-col-6 vf-col-sm-4">.vf-col-6 .vf-col-sm-4</div>

  <!-- Force next columns to break to new line at md breakpoint and up -->
  <div class="w-100 d-none d-md-block"></div>

  <div class="vf-col-6 vf-col-sm-4">.vf-col-6 .vf-col-sm-4</div>
  <div class="vf-col-6 vf-col-sm-4">.vf-col-6 .vf-col-sm-4</div>
</div>
```
