
## Disabled and active states

Pagination links are customisable for different circumstances. Use `.disabled` for links that appear un-clickable and `.active` to indicate the current page.

While the `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality.

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
