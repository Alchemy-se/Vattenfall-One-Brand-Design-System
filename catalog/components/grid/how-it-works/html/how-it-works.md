## How it works

Vattenfall’s grid system uses a series of containers, lines, and columns to layout and align content. It's built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and is fully responsive. Below is an example and an in-depth look at how the grid comes together.


```html
<div class="vf-container">
  <div class="vf-row">
    <div class="vf-col-sm">
      One of three columns
    </div>
    <div class="vf-col-sm">
      One of three columns
    </div>
    <div class="vf-col-sm">
      One of three columns
    </div>
  </div>
</div>
```

The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent `.vf-container`.

- Containers provide a means to center and horizontally pad your site's contents. See [Containers](#different-containers) section on the bottom.
- Rows are wrappers for columns. Each column has horizontal `padding` (called a gutter) for controlling the space between them. This `padding` is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.
- In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
- Grid columns without a specified `width` will automatically layout as equal width columns. See the [auto-layout columns](#auto-layout-columns) section for more examples.
- Column classes indicate the number of columns you'd like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use `.vf-col-4`.
- Column `width`s are set in percentages, so they're always fluid and sized relative to their parent element.
- Columns have horizontal `padding` to create the gutters between individual columns, however, you can remove the `margin` from rows and `padding` from columns with `.no-gutters` on the `.row`.
- To make the grid responsive, there are five grid breakpoints, one for each [responsive breakpoint](#responsive-classes): all breakpoints, small, medium, large, and extra large.
- Grid breakpoints are based on minimum width media queries, meaning **they apply to that one breakpoint and all those above it** (e.g., `.vf-col-sm-4` applies to small, medium, large, and extra large devices, but not the first `xs` breakpoint).

Be aware of the limitations and [bugs around flexbox](https://github.com/philipwalton/flexbugs), like the [inability to use some HTML elements as flex containers](https://github.com/philipwalton/flexbugs#flexbug-9).
