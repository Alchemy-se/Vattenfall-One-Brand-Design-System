
### No gutters

The gutters between columns in our predefined grid classes can be removed with `.no-gutters`. This removes the negative `margin`s from `.row` and the horizontal `padding` from all immediate children columns.

Here's the source code for creating these styles. Note that column overrides are scoped to only the first children columns and are targeted via [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors). While this generates a more specific selector, column padding can still be further customized with [spacing utilities](/docs/utilities/spacing/).

**Need an edge-to-edge design?** Drop the parent `.vf-container` or `.vf-container-fluid`.

```
.no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .vf-col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}
```

In practice, here's how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).

```html
<div class="row no-gutters">
  <div class="vf-col-12 vf-col-sm-6 vf-col-md-8">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-12 .vf-col-sm-6 .vf-col-md-8</div>
  </div>
  <div class="vf-col-6 vf-col-md-4">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-6 .vf-col-md-4</div>
  </div>
</div>
```
