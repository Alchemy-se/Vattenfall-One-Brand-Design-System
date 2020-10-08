
### Disabled

To disable a drop-down, simply add the modifier class `disabled` to the `vf-dropdown` element, and change the `data-control` attribute to `vf-dropdown-data-disabled`
```html
showSource: true
---
<div class="vf-row">
  <div class="vf-dropdown disabled" data-control="vf-dropdown-data-disabled">
    <label class="vf-dropdown-label">Select option</label>
    <div class="vf-dropdown-list">
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Winter
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Spring
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Summer
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Autumn
        </label>
      </div>
    </div>
  </div>
</div>
```
