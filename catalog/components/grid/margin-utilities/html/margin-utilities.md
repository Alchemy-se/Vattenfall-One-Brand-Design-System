
#### Margin utilities

With the move to flexbox in v4, you can use margin utilities like `.mr-auto` to force sibling columns away from one another.

```html
<div class="vf-row">
  <div class="vf-col-md-4">.vf-col-md-4</div>
  <div class="vf-col-md-4 ml-auto">.vf-col-md-4 .ml-auto</div>
</div>
<div class="vf-row">
  <div class="vf-col-md-3 ml-md-auto">.vf-col-md-3 .ml-md-auto</div>
  <div class="vf-col-md-3 ml-md-auto">.vf-col-md-3 .ml-md-auto</div>
</div>
<div class="vf-row">
  <div class="vf-col-auto mr-auto">.vf-col-auto .mr-auto</div>
  <div class="vf-col-auto">.vf-col-auto</div>
</div>
```
