
### Offsetting columns

You can offset grid columns in two ways: our responsive `.vf-offset-` grid classes and our [margin utilities](/docs/utilities/spacing/). Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.

#### Offset classes

Move columns to the right using `.vf-offset-md-*` classes. These classes increase the left margin of a column by `*` columns. For example, `.vf-offset-md-4` moves `.vf-col-md-4` over four columns.

```html
<div class="vf-row">
  <div class="vf-col-md-4">.vf-col-md-4</div>
  <div class="vf-col-md-4 vf-offset-md-4">.vf-col-md-4 .vf-offset-md-4</div>
</div>
<div class="vf-row">
  <div class="vf-col-md-3 vf-offset-md-3">.vf-col-md-3 .vf-offset-md-3</div>
  <div class="vf-col-md-3 vf-offset-md-3">.vf-col-md-3 .vf-offset-md-3</div>
</div>
<div class="vf-row">
  <div class="vf-col-md-6 vf-offset-md-3">.vf-col-md-6 .vf-offset-md-3</div>
</div>
```

In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in [the grid example](/docs/examples/grid/).

```html
<div class="vf-row">
  <div class="vf-col-sm-5 vf-col-md-6">.vf-col-sm-5 .vf-col-md-6</div>
  <div class="vf-col-sm-5 vf-offset-sm-2 vf-col-md-6 vf-offset-md-0">.vf-col-sm-5 .vf-offset-sm-2 .vf-col-md-6 .vf-offset-md-0</div>
</div>

<div class="vf-row">
  <div class="vf-col-sm-6 vf-col-md-5 vf-col-lg-6">.vf-col-sm-6 .vf-col-md-5 .vf-col-lg-6</div>
  <div class="vf-col-sm-6 vf-col-md-5 vf-offset-md-2 vf-col-lg-6 vf-offset-lg-0">.vf-col-sm-6 .vf-col-md-5 .vf-offset-md-2 .vf-col-lg-6 .vf-offset-lg-0</div>
</div>
```
