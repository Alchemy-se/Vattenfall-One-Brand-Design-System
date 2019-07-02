## Standard

To add a Tooltip, simply wrap the content in a span with class `vf-tooltip` and add the Tooltip message as a `data-tooltip` data attribute with the required text:

```html
showSource: true
plain: false
---
President and CEO Magnus Hall and CFO Anna Borg comment on Vattenfall's half-year results <span class="vf-tooltip" data-tooltip="Tooltip message">
  2018
</span>. The web audiocast for analysts.

  
```

## With Icon

To add a Tooltip with an icon instead of text, simply create an empty element with classes `vf-tooltip` and `vf-icon-question` and add the Tooltip message as a `data-tooltip` data attribute with the required text:

```html
showSource: true
plain: false
---

<span class="vf-tooltip vf-icon-question" data-tooltip="Tooltip message">
</span>
  
```

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


### Alignment:

* `vf-tooltip--left`
* `vf-tooltip--right`
* `vf-tooltip--bottom`

Left-Aligned:


```html
showSource: false
plain: false
---

<div class="vf-container" style="text-align: center;">

  <span class="vf-tooltip vf-icon-question vf-tooltip--blue vf-tooltip--left" data-tooltip="Blue Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--red vf-tooltip--left" data-tooltip="Red Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--left" data-tooltip="Green Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--blue-solid vf-tooltip--left" data-tooltip="Solid Blue Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--green-solid vf-tooltip--left" data-tooltip="Solid Green Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--red-solid vf-tooltip--left" data-tooltip="Solid Red Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--yellow-solid vf-tooltip--left" data-tooltip="Solid Yellow Tooltip message">

  </span>

</div>
  
```

```html
showSource: false
plain: false
---

<div class="vf-container" style="text-align: center;">

  <span class="vf-tooltip vf-tooltip--yellow-solid vf-tooltip--left" data-tooltip="Solid Yellow Tooltip message">
    Tooltip available for this content.
  </span>

</div>
  
```

Right-Aligned:

```html
showSource: false
plain: false
---

<div class="vf-container" style="text-align: center;">

  <span class="vf-tooltip vf-icon-question vf-tooltip--blue vf-tooltip--right" data-tooltip="Blue Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--red vf-tooltip--right" data-tooltip="Red Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--right" data-tooltip="Green Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--blue-solid vf-tooltip--right" data-tooltip="Solid Blue Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--green-solid vf-tooltip--right" data-tooltip="Solid Green Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--red-solid vf-tooltip--right" data-tooltip="Solid Red Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--yellow-solid vf-tooltip--right" data-tooltip="Solid Yellow Tooltip message">

  </span>

</div>
  
```

```html
showSource: false
plain: false
---

<div class="vf-container" style="text-align: center;">

  <span class="vf-tooltip vf-tooltip--red vf-tooltip--right" data-tooltip="Red Tooltip message">
    Tooltip available for this content.
  </span>

</div>
  
```

Bottom-Aligned:

```html
showSource: false
plain: false
---

<div class="vf-container" style="text-align: center;">

  <span class="vf-tooltip vf-icon-question vf-tooltip--blue vf-tooltip--bottom" data-tooltip="Blue Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--red vf-tooltip--bottom" data-tooltip="Red Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--bottom" data-tooltip="Green Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--blue-solid vf-tooltip--bottom" data-tooltip="Solid Blue Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--green-solid vf-tooltip--bottom" data-tooltip="Solid Green Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--red-solid vf-tooltip--bottom" data-tooltip="Solid Red Tooltip message">

  </span>

  <span class="vf-tooltip vf-icon-question vf-tooltip--yellow-solid vf-tooltip--bottom" data-tooltip="Solid Yellow Tooltip message">

  </span>

</div>
  
```

```html
showSource: false
plain: false
---

<div class="vf-container" style="text-align: center;">

  <span class="vf-tooltip vf-tooltip--blue vf-tooltip--bottom" data-tooltip="Blue Tooltip message">
    Tooltip available for this content.
  </span>

</div>
  
```