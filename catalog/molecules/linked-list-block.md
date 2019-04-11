Linked list block is used to display an image or a video with some text and a long list of links.

```html
responsive: true
---
<section class="vf-linked-list-block">
  <div class="vf-linked-list-block__body">
    <div class="vf-linked-list-block__media">
      <img src="/img/example-startpage/fossil-free.png" />
    </div>
    <div class="vf-linked-list-block__content">
      <h3 class="vf-linked-list-block__title">
        Q2 Report 2018 <br/> 
        is published
      </h3>
      <div class="vf-linked-list-block__text">
        <p>
          President and CEO Magnus Hall and CFO Anna Borg comment on Vattenfall's half-year results 2018. The web audiocast for analysts.
        </p>

        <a href="#" class="vf-link-with-arrow">
          Download report as PDF
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Watch on Youtube
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Listen as audiocast
        </a>
        <a href="#" class="vf-link-with-arrow">
          Download report as PDF
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Watch on Youtube
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Listen as audiocast
        </a>
        <a href="#" class="vf-link-with-arrow">
          Download report as PDF
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Watch on Youtube
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Listen as audiocast
        </a>
      </div>
    </div>
  </div>
</section>
```

## Reversed

To have the image on the left, simply add the modifier class `vf-linked-list-block--reversed` to the `vf-linked-list-block` element.

```html
responsive: true
---
<section class="vf-linked-list-block vf-linked-list-block--reversed">
  <div class="vf-linked-list-block__body">
    <div class="vf-linked-list-block__media">
      <img src="/img/example-startpage/fossil-free.png" />
    </div>
    <div class="vf-linked-list-block__content">
      <h3 class="vf-linked-list-block__title">
        Q2 Report 2018 <br/> 
        is published
      </h3>
      <div class="vf-linked-list-block__text">
        <p>
          President and CEO Magnus Hall and CFO Anna Borg comment on Vattenfall's half-year results 2018. The web audiocast for analysts.
        </p>

        <a href="#" class="vf-link-with-arrow">
          Download report as PDF
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Watch on Youtube
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Listen as audiocast
        </a>
        <a href="#" class="vf-link-with-arrow">
          Download report as PDF
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Watch on Youtube
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Listen as audiocast
        </a>
        <a href="#" class="vf-link-with-arrow">
          Download report as PDF
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Watch on Youtube
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Listen as audiocast
        </a>
      </div>
    </div>
  </div>
</section>
```

## No Media

To display the Linked List without an image or a video.

```html
responsive: true
---
<section class="vf-linked-list-block vf-linked-list-block--reversed">
  <div class="vf-linked-list-block__body">
    <div class="vf-linked-list-block__content">
      <h3 class="vf-linked-list-block__title">
        Q2 Report 2018 <br/> 
        is published
      </h3>
      <div class="vf-linked-list-block__text">
        <p>
          President and CEO Magnus Hall and CFO Anna Borg comment on Vattenfall's half-year results 2018. The web audiocast for analysts.
        </p>

        <a href="#" class="vf-link-with-arrow">
          Download report as PDF
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Watch on Youtube
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Listen as audiocast
        </a>
        <a href="#" class="vf-link-with-arrow">
          Download report as PDF
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Watch on Youtube
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Listen as audiocast
        </a>
        <a href="#" class="vf-link-with-arrow">
          Download report as PDF
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Watch on Youtube
        </a>
        <br />
        <a href="#" class="vf-link-with-arrow">
          Listen as audiocast
        </a>
      </div>
    </div>
  </div>
</section>
```

## Background Colors

The following background colors are okay to use as background colors. Use any of these helper classes.

```
.vf-bg--light-green
.vf-bg--light-blue
.vf-bg--light-grey
```