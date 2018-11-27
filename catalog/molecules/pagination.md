## Overview

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

```html
<nav aria-label="Page navigation example">
  <ul class="vf-pagination">
    <li class="vf-page-item"><a class="vf-page-link" href="#">Previous</a></li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">1</a></li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">2</a></li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">3</a></li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">Next</a></li>
  </ul>
</nav>
```

## Working with icons

Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria` attributes.

```html
showSource: true
---
<nav aria-label="Page navigation example">
  <ul class="vf-pagination">
    <li class="vf-page-item">
      <a class="vf-page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">1</a></li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">2</a></li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">3</a></li>
    <li class="vf-page-item">
      <a class="vf-page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```

## Disabled and active states

Pagination links are customizable for different circumstances. Use `.disabled` for links that appear un-clickable and `.active` to indicate the current page.

While the `.disabled` class uses `pointer-events: none` to _try_ to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, you should always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality.

```html
<nav aria-label="...">
  <ul class="vf-pagination">
    <li class="vf-page-item disabled">
      <a class="vf-page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">1</a></li>
    <li class="vf-page-item active" aria-current="page">
      <a class="vf-page-link" href="#">2 <span class="vf-sr-only">(current)</span></a>
    </li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">3</a></li>
    <li class="vf-page-item">
      <a class="vf-page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.

```html
<nav aria-label="...">
  <ul class="vf-pagination">
    <li class="vf-page-item disabled">
      <span class="vf-page-link">Previous</span>
    </li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">1</a></li>
    <li class="vf-page-item active" aria-current="page">
      <span class="vf-page-link">
        2
        <span class="vf-sr-only">(current)</span>
      </span>
    </li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">3</a></li>
    <li class="vf-page-item">
      <a class="vf-page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

## Alignment

Change the alignment of pagination components with [flexbox utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/).

```html
<nav aria-label="Page navigation example">
  <ul class="vf-pagination justify-content-center">
    <li class="vf-page-item disabled">
      <a class="vf-page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">1</a></li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">2</a></li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">3</a></li>
    <li class="vf-page-item">
      <a class="vf-page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

```html
<nav aria-label="Page navigation example">
  <ul class="vf-pagination justify-content-end">
    <li class="vf-page-item disabled">
      <a class="vf-page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">1</a></li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">2</a></li>
    <li class="vf-page-item"><a class="vf-page-link" href="#">3</a></li>
    <li class="vf-page-item">
      <a class="vf-page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```
