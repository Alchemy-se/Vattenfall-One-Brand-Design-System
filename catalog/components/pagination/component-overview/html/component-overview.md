## Overview

We use a large block of connected links for our pagination, making links hard to miss and easily scalable, all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

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
