### Tab bar Mobile / Fixed

Fixed tabs display all tabs on one screen, with each tab at a fixed width. The width of each tab is determined by dividing the number of tabs by the screen width. They don’t scroll to reveal more tabs; the visible tab set represents the only tabs available.

```html
showSource: true
---
<div class="vf-tab-bar-container--mobile">
  <ul class="vf-tab-bar--mobile-fixed">
    <li
      class="vf-tab-bar-item--mobile--fixed vf-tab-bar-item--mobile--active"
    >
      Lorem Lipsum
    </li>
    <li class="vf-tab-bar-item--mobile--fixed">Lorem Lipsum</li>
  </ul>
  <div class="vf-tab-bar-content--mobile--fixed">1</div>
  <div class="vf-tab-bar-content--mobile--fixed">2</div>
</div>
```
