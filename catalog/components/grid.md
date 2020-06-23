## How it works

Vattenfall's grid system uses a series of containers, rows, and columns to layout and align content. It's built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and is fully responsive. Below is an example and an in-depth look at how the grid comes together.


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

Breaking it down, here's how it works:

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

## Auto-layout columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like `.vf-col-sm-6`.

### Equal-width

For example, here are two grid layouts that apply to every device and viewport, from `xs` to `xl`. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.

```html
<div class="vf-container">
  <div class="vf-row">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">1 of 2</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">2 of 2</div>
    </div>
  </div>
  <div class="vf-row">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">1 of 3</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">2 of 3</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">3 of 3</div>
    </div>
  </div>
</div>
```

Equal-width columns can be broken into multiple lines, but there was a [Safari flexbox bug](https://github.com/philipwalton/flexbugs#flexbug-11) that prevented this from working without an explicit `flex-basis` or `border`. There are workarounds for older browser versions, but they shouldn't be necessary if you're up-to-date.

```html
<div class="vf-container">
  <div class="vf-row">
    <div class="vf-col"><div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Column</div></div>
    <div class="vf-col"><div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Column</div></div>
    <div class="w-100"></div>
    <div class="vf-col"><div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Column</div></div>
    <div class="vf-col"><div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Column</div></div>
  </div>
</div>
```

### Setting one column width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.

```html
<div class="vf-container">
  <div class="vf-row">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">1 of 3</div>
    </div>
    <div class="vf-col-6">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">2 of 3 (wider)</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">3 of 3</div>
    </div>
  </div>
  <div class="vf-row">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">1 of 3</div>
    </div>
    <div class="vf-col-5">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">2 of 3 (wider)</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">3 of 3</div>
    </div>
  </div>
</div>
```

### Variable width content

Use `col-{breakpoint}-auto` classes to size columns based on the natural width of their content.

```html
<div class="vf-container">
  <div class="row justify-content-md-center">
    <div class="vf-col vf-col-lg-2">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">1 of 3</div>
    </div>
    <div class="vf-col-md-auto">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Variable width content</div>
    </div>
    <div class="vf-col vf-col-lg-2">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">3 of 3</div>
    </div>
  </div>
  <div class="vf-row">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">1 of 3</div>
    </div>
    <div class="vf-col-md-auto">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Variable width content</div>
    </div>
    <div class="vf-col vf-col-lg-2">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">3 of 3</div>
    </div>
  </div>
</div>
```

### Equal-width multi-row

Create equal-width columns that span multiple rows by inserting a `.w-100` where you want the columns to break to a new line. Make the breaks responsive by mixing the `.w-100` with some [responsive display utilities](/docs/utilities/display/).

```html
<div class="vf-row">
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
  <div class="w-100"></div>
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
</div>
```

## Responsive classes

VF Design System's grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on small, medium, large, or extra large devices however you see fit.

### All breakpoints

For grids that are the same from the smallest of devices to the largest, use the `.vf-col` and `.vf-col-*` classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to `.vf-col`.

```html
<div class="vf-row">
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
  <div class="vf-col">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col</div>
  </div>
</div>
<div class="vf-row">
  <div class="vf-col-8">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-8</div>
  </div>
  <div class="vf-col-4">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-4</div>
  </div>
</div>
```

### Stacked to horizontal

Using a single set of `.vf-col-sm-*` classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (`sm`).

```html
<div class="vf-row">
  <div class="vf-col-sm-8">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-sm-8</div>
  </div>
  <div class="vf-col-sm-4">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-sm-4</div>
  </div>
</div>
<div class="vf-row">
  <div class="vf-col-sm">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-sm</div>
  </div>
  <div class="vf-col-sm">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-sm</div>
  </div>
  <div class="vf-col-sm">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">col-sm</div>
  </div>
</div>
```

### Mix and match

Don't want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.

```html
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="vf-row">
  <div class="vf-col-12 vf-col-md-8">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-12 .vf-col-md-8</div>
  </div>
  <div class="vf-col-6 vf-col-md-4">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-6 .vf-col-md-4</div>
  </div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="vf-row">
  <div class="vf-col-6 vf-col-md-4">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-6 .vf-col-md-4</div>
  </div>
  <div class="vf-col-6 vf-col-md-4">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-6 .vf-col-md-4</div>
  </div>
  <div class="vf-col-6 vf-col-md-4">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-6 .vf-col-md-4</div>
  </div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="vf-row">
  <div class="vf-col-6">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-6</div>
  </div>
  <div class="vf-col-6">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">.vf-col-6</div>
  </div>
</div>
```

### Gutters

Gutters can be responsively adjusted by breakpoint-specific padding and negative margin utility classes. To change the gutters in a given row, pair a negative margin utility on the `.row` and matching padding utilities on the `.vf-col`s.

Here's an example of customizing the VF Design System grid at the large (`lg`) breakpoint and above. We've increased the `.vf-col` padding with `.px-lg-5` and then counteracted that with `.mx-lg-n5` on the parent `.row`.

```html
<div class="row mx-lg-n5">
  <div class="vf-col py-3 px-lg-5 border bg-light">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Custom column padding</div>
  </div>
  <div class="vf-col py-3 px-lg-5 border bg-light">
    <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">Custom column padding</div>
  </div>
</div>
```
## Alignment

Use flexbox alignment utilities to vertically and horizontally align columns.

### Vertical alignment

```html
<div class="vf-container">
  <div class="row align-items-start">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
  </div>
  <div class="row align-items-center">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
  </div>
  <div class="row align-items-end">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
  </div>
</div>
```

```html
<div class="vf-container">
  <div class="vf-row">
    <div class="vf-col align-self-start">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col align-self-center">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
    <div class="vf-col align-self-end">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of three columns</div>
    </div>
  </div>
</div>
```

### Horizontal alignment

```html
<div class="vf-container">
  <div class="row justify-content-start">
    <div class="vf-col-4">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of two columns</div>
    </div>
    <div class="vf-col-4">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of two columns</div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="vf-col-4">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of two columns</div>
    </div>
    <div class="vf-col-4">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of two columns</div>
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="vf-col-4">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of two columns</div>
    </div>
    <div class="vf-col-4">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of two columns</div>
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="vf-col-4">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of two columns</div>
    </div>
    <div class="vf-col-4">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of two columns</div>
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="vf-col-4">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of two columns</div>
    </div>
    <div class="vf-col-4">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">One of two columns</div>
    </div>
  </div>
</div>
```

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

### Column wrapping

If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.

```html
<div class="vf-row">
  <div class="vf-col-9">.vf-col-9</div>
  <div class="vf-col-4">.vf-col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
  <div class="vf-col-6">.vf-col-6<br>Subsequent columns continue along the new line.</div>
</div>
```

### Column breaks

Breaking columns to a new line in flexbox requires a small hack: add an element with `width: 100%` wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple `.row`s, but not every implementation method can account for this.

```html
<div class="vf-row">
  <div class="vf-col-6 vf-col-sm-3">.vf-col-6 .vf-col-sm-3</div>
  <div class="vf-col-6 vf-col-sm-3">.vf-col-6 .vf-col-sm-3</div>

  <!-- Force next columns to break to new line -->
  <div class="w-100"></div>

  <div class="vf-col-6 vf-col-sm-3">.vf-col-6 .vf-col-sm-3</div>
  <div class="vf-col-6 vf-col-sm-3">.vf-col-6 .vf-col-sm-3</div>
</div>
```

You may also apply this break at specific breakpoints with our [responsive display utilities](/docs/utilities/display/).

```html
<div class="vf-row">
  <div class="vf-col-6 vf-col-sm-4">.vf-col-6 .vf-col-sm-4</div>
  <div class="vf-col-6 vf-col-sm-4">.vf-col-6 .vf-col-sm-4</div>

  <!-- Force next columns to break to new line at md breakpoint and up -->
  <div class="w-100 d-none d-md-block"></div>

  <div class="vf-col-6 vf-col-sm-4">.vf-col-6 .vf-col-sm-4</div>
  <div class="vf-col-6 vf-col-sm-4">.vf-col-6 .vf-col-sm-4</div>
</div>
```

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

### Offsetting columns

You can offset grid columns in two ways: our responsive `.vf-offset-` grid classes and our [margin utilities](/docs/utilities/spacing/). Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.

#### Offset classes

Move columns to the right using `.vf-offset-md-*` classes. These classes increase the left margin of a column by `*` columns. For example, `.vf-offset-md-4` moves `.vf-col-md-4` over four columns.

```html
<div class="vf-row">
  <div class="vf-col-md-4">.vf-col-md-4</div>
  <div class="vf-col-md-4 vf-offset-md-4">.vf-col-md-4 .vf-offset-md-4</div>
</div>
<div class="vf-row">
  <div class="vf-col-md-3 vf-offset-md-3">.vf-col-md-3 .vf-offset-md-3</div>
  <div class="vf-col-md-3 vf-offset-md-3">.vf-col-md-3 .vf-offset-md-3</div>
</div>
<div class="vf-row">
  <div class="vf-col-md-6 vf-offset-md-3">.vf-col-md-6 .vf-offset-md-3</div>
</div>
```

In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in [the grid example](/docs/examples/grid/).

```html
<div class="vf-row">
  <div class="vf-col-sm-5 vf-col-md-6">.vf-col-sm-5 .vf-col-md-6</div>
  <div class="vf-col-sm-5 vf-offset-sm-2 vf-col-md-6 vf-offset-md-0">.vf-col-sm-5 .vf-offset-sm-2 .vf-col-md-6 .vf-offset-md-0</div>
</div>

<div class="vf-row">
  <div class="vf-col-sm-6 vf-col-md-5 vf-col-lg-6">.vf-col-sm-6 .vf-col-md-5 .vf-col-lg-6</div>
  <div class="vf-col-sm-6 vf-col-md-5 vf-offset-md-2 vf-col-lg-6 vf-offset-lg-0">.vf-col-sm-6 .vf-col-md-5 .vf-offset-md-2 .vf-col-lg-6 .vf-offset-lg-0</div>
</div>
```

#### Margin utilities

With the move to flexbox in v4, you can use margin utilities like `.mr-auto` to force sibling columns away from one another.

```html
<div class="vf-row">
  <div class="vf-col-md-4">.vf-col-md-4</div>
  <div class="vf-col-md-4 ml-auto">.vf-col-md-4 .ml-auto</div>
</div>
<div class="vf-row">
  <div class="vf-col-md-3 ml-md-auto">.vf-col-md-3 .ml-md-auto</div>
  <div class="vf-col-md-3 ml-md-auto">.vf-col-md-3 .ml-md-auto</div>
</div>
<div class="vf-row">
  <div class="vf-col-auto mr-auto">.vf-col-auto .mr-auto</div>
  <div class="vf-col-auto">.vf-col-auto</div>
</div>
```

## Different containers

### Standard container

`.vf-container`

The regular container for all standard content.

### Tight container

`.vf-container--tight`

Used for content heavy pages etc.

### Bleed container

`.vf-container-bleed`

For content areas that are supposed to bleed out of the standard container. 
