## Tab Bar

To select a tab by default, simply add the `vf-tab-bar-item--active` class to the corresponding `li` element. It is advisable to set up `aria` attributes as below. These will be updated as the selected tab changes.

To disable a tab, simply add the `vf-tab-bar-item--disabled` class to the corresponding `li` element, and add `aria-disabled="true"`.


```html
showSource: true
plain: false
---
<div class="vf-container vf-container--inline">
  <ul class="vf-tab-bar" aria-label="Tab bar example" role="tablist">
    <li class="vf-tab-bar-item vf-tab-bar-item--active" role="tab" aria-selected="true" tabindex="0">
      <a class="vf-tab-bar-link" href="#">
        Active tab name
      </a>
    </li>
    <li class="vf-tab-bar-item" role="tab" aria-selected="false" tabindex="-1">
      <a class="vf-tab-bar-link" href="#">
        Idle tab name 1
      </a>
    </li>
    <li class="vf-tab-bar-item vf-tab-bar-item--disabled" role="tab" aria-disabled="true" tabindex="-1">
      <a class="vf-tab-bar-link" href="#">
        Disabled tab name
      </a>
    </li>
    <li class="vf-tab-bar-item" role="tab" aria-selected="false" tabindex="-1">
      <a class="vf-tab-bar-link" href="#">
        Idle tab name 2
      </a>
    </li>
  </ul>
</div>
```