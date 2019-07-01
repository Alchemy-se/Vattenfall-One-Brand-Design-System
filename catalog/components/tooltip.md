## Standard

```html
showSource: true
plain: false
---

<div class="vf-tooltip" data-tooltip="Tooltip message goes here">
  Some content here.
</div>
  
```

## Inline

To add an inline Tooltip (no Tooltip icon), simply wrap the content in a span with class `vf-tooltip` and add the Tooltip message as a `data-tooltip` data attribute with the required text:

```html
showSource: true
plain: false
---

<span class="vf-tooltip" data-tooltip="Tooltip message goes here">
  This content is wrapped in a Tooltip
</span>
  
```

## Tooltip message styling

The standard Tooltip message is green. To use another style, simply add the relevant class to the `vf-tooltip` element:

* `vf-tooltip--blue`
* `vf-tooltip--red`
* `vf-tooltip--blue-solid`
* `vf-tooltip--green-solid`
* `vf-tooltip--red-solid`
* `vf-tooltip--yellow-solid`


```html
showSource: true
plain: false
---

<span class="vf-tooltip vf-icon-question vf-tooltip--blue" data-tooltip="Blue Tooltip message">

</span>

<span class="vf-tooltip vf-icon-question vf-tooltip--red" data-tooltip="Red Tooltip message">

</span>

<span class="vf-tooltip vf-icon-question" data-tooltip="Green Tooltip message">

</span>

<span class="vf-tooltip vf-icon-question vf-tooltip--blue-solid" data-tooltip="Solid blue Tooltip message">

</span>

<span class="vf-tooltip vf-icon-question vf-tooltip--green-solid" data-tooltip="Solid Green Tooltip message">

</span>

<span class="vf-tooltip vf-icon-question vf-tooltip--red-solid" data-tooltip="solid red Tooltip message">

</span>

<span class="vf-tooltip vf-icon-question vf-tooltip--yellow-solid" data-tooltip="Solid yellow Tooltip message">

</span>
  
```

## Tooltip message alignment

The standard Tooltip is aligned to the top. To change alignment, simply add the relevant class to the `vf-tooltip` element:

* `vf-tooltip--left`
* `vf-tooltip--right`
* `vf-tooltip--bottom`

```html
showSource: true
plain: false
---

<div class="vf-tooltip vf-tooltip--left vf-tooltip--green-solid" data-tooltip="Left-aligned Tooltip">
  This content is wrapped in a Tooltip
</div>
  
```

```html
showSource: true
plain: false
---

<div class="vf-tooltip vf-tooltip--right vf-tooltip--red" data-tooltip="Right-aligned Tooltip">
  This content is wrapped in a Tooltip
</div>
  
```

```html
showSource: true
plain: false
---

<div class="vf-tooltip vf-tooltip--bottom vf-tooltip--blue" data-tooltip="Bottom-aligned Tooltip">
  This content is wrapped in a Tooltip
</div>
  
```