
## Icons

When you want to use an icon or symbol as pagination, be sure to provide screen reader support with `aria` attributes.

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
