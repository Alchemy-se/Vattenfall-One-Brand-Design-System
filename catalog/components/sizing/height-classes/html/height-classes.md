
### Height classes

```html
showSource: true
---
<div style="height: 100px; background-color: rgba(255,254,229,0.8);">
  <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(237,241,2461)">Height 25%</div>
  <div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(237,241,2461)">Height 50%</div>
  <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(237,241,2461)">Height 75%</div>
  <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(237,241,2461)">Height 100%</div>
  <div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(237,241,2461)">Height auto</div>
</div>
```

You can also use class `.mh-100` to achieve `max-height: 100%;`.

```html
showSource: true
---
<div style="height: 100px; background-color: rgba(255,254,229,0.8);">
  <div class="mh-100" style="width: 100px; height: 200px; background-color: rgba(237,241,246,1);">Max-height 100%</div>
</div>
```
