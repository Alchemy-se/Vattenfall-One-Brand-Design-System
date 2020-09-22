
## Reordering

### Order classes

Use `.order-` classes for controlling the **visual order** of your content. These classes are responsive, so you can set the `order` by breakpoint (e.g., `.order-1.order-md-2`). Includes support for `1` through `12` across all five grid tiers.

```html
<div class="vf-container">
  <div class="vf-row">
    <div class="vf-col">
      First, but unordered
    </div>
    <div class="vf-col order-12">
      Second, but last
    </div>
    <div class="vf-col order-1">
      Third, but first
    </div>
  </div>
</div>
```

There are also responsive `.order-first` and `.order-last` classes that change the `order` of an element by applying `order: -1` and `order: 13` (`order: $columns + 1`), respectively. These classes can also be intermixed with the numbered `.order-*` classes as needed.

```html
<div class="vf-container">
  <div class="vf-row">
    <div class="vf-col order-last">
      First, but last
    </div>
    <div class="vf-col">
      Second, but unordered
    </div>
    <div class="vf-col order-first">
      Third, but first
    </div>
  </div>
</div>
```
