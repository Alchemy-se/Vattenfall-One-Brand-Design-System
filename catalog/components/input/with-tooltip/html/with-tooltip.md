
### With Tooltip

To add a Tooltip icon and text, simply add a `data-tooltip` data attribute with the required text to the `input` element. [Tooltip](/css/tooltip) styling classes must be applied to the `input` element. Available options:

* `vf-tooltip--blue`
* `vf-tooltip--red`
* `vf-tooltip--blue-solid`
* `vf-tooltip--green-solid`
* `vf-tooltip--red-solid`
* `vf-tooltip--yellow-solid`
* `vf-tooltip--left`
* `vf-tooltip--right`
* `vf-tooltip--bottom`


```html
showSource: true
---

<div class="vf-row">
  <div class="vf-input-container">
    <input type="text" id="vf_tooltip_input" class="vf-input" data-tooltip="Tooltip text">
    <label for="vf_tooltip_input">Tooltip Label</label>
  </div>
</div>
```
