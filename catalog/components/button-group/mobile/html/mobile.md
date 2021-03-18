### Mobile

For mobile use `.vf-btn-group__mobile` instead.

```html
showSource: true
---
<div class="vf-btn-group__mobile" role="group" aria-label="Basic example">
  <button type="button" class="vf-btn-group__btn vf-btn vf-btn--secondary">Left</button>
  <button type="button" class="vf-btn-group__btn vf-btn vf-btn--secondary">Middle</button>
  <button type="button" class="vf-btn-group__btn vf-btn vf-btn--secondary">Middle</button>
  <button type="button" class="vf-btn-group__btn vf-btn vf-btn--secondary">Right</button>
</div>
```

##### Ensure correct `role` and provide a label

In order for assistive technologies (like screen readers) to convey that a series of buttons are grouped, an appropriate `role` attribute needs to be provided. For button groups, this would be `role="group"`, while toolbars should have a `role="toolbar"`.

In addition, groups and toolbars should be given an explicit label as most assistive technologies will otherwise not announce them, even with a correct role attribute. In these examples we use `aria-label`, but alternatives such as `aria-labelledby` can also be used.