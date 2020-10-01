
## Styling

The standard Tooltip message is **top-aligned** and **green**. To use another style, simply add the relevant class(es) to the `vf-tooltip` element:

### Colours:

* `vf-tooltip--blue`
* `vf-tooltip--red`
* `vf-tooltip--blue-solid`
* `vf-tooltip--green-solid`
* `vf-tooltip--red-solid`
* `vf-tooltip--yellow-solid`


```html
showSource: false
plain: false
---
<div class="vf-container" style="text-align: center;">

  <span class="vf-tooltip vf-icon-question vf-tooltip--blue" data-tooltip="Blue Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--red" data-tooltip="Red Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question" data-tooltip="Green Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--blue-solid" data-tooltip="Solid Blue Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--green-solid" data-tooltip="Solid Green Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--red-solid" data-tooltip="Solid Red Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--yellow-solid" data-tooltip="Solid Yellow Tooltip message">

  </span>

</div>

```
