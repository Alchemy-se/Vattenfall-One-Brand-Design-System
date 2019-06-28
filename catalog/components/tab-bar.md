## Tab Bar

To select a tab by default, simply add the `vf-tab-bar-item--active` class to the corresponding `li` element. It is advisable to set up `aria` attributes as below. These will be updated as the selected tab changes. It is important to add the `vf-tab-bar-container` to the `vf-container` element.

To disable a tab, simply add the `vf-tab-bar-item--disabled` class to the corresponding `li` element, and add `aria-disabled="true"`.

To add a placeholder icon, simply add `vf-icon-placeholder` to the `vf-tab-bar-link` element.

```html
showSource: true
plain: false
---
<div class="vf-container vf-tab-bar-container">
  <ul class="vf-tab-bar" aria-label="Tab bar example" role="tablist">
    <li id="vf-tab-1" class="vf-tab-bar-item vf-tab-bar-item--active" role="tab" aria-controls="vf-panel-1" aria-selected="true" tabindex="0">
      <div class="vf-tab-bar-link vf-icon-placeholder">
        Tab name 1
      </div>
    </li>
    <li id="vf-tab-2" class="vf-tab-bar-item" role="tab" aria-controls="vf-panel-2" aria-selected="false" tabindex="-1">
      <div class="vf-tab-bar-link vf-icon-placeholder">
        Tab name 2
      </div>
    </li>
    <li id="vf-tab-3" class="vf-tab-bar-item vf-tab-bar-item--disabled" role="tab" aria-disabled="true" tabindex="-1">
      <div class="vf-tab-bar-link vf-icon-placeholder" div>
        Disabled tab
      </div>
    </li>
    <li id="vf-tab-4" class="vf-tab-bar-item" role="tab" aria-controls="vf-panel-4" aria-selected="false" tabindex="-1">
      <div class="vf-tab-bar-link vf-icon-placeholder">
        Tab name 4
      </div>
    </li>
  </ul>
  <div class="vf-tab-bar-panels">
    <div id="vf-panel-1" class="vf-panel" role="tabpanel" tabindex="0" aria-labelledby="vf-tab-1">
      <p>It's not enough to be efficient: we must also be innovative in our ways of working.</p>
    </div>
    <div id="vf-panel-2" class="vf-panel" role="tabpanel" tabindex="0" aria-labelledby="vf-tab-2" hidden>
      <p>Content for the second panel</p>
    </div>
    <div id="vf-panel-3" class="vf-panel" role="tabpanel" tabindex="0" aria-labelledby="vf-tab-3" hidden>
    </div>
    <div id="vf-panel-4" class="vf-panel" role="tabpanel" tabindex="0" aria-labelledby="vf-tab-4" hidden>
      <p>Content for the fourth panel</p>
    </div>
  </div>
</div>
```