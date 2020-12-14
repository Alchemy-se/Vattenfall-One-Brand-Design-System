The Blockquote component is used for displaying shorter textual content, like quotes or shorter punchlines.

### Basic example with image

This example uses a quote, with an author and his title, along with an image.

```html
showSource: true
---
<div class="vf-blockquote">
  <img class="vf-blockquote__illustration" src="/img/example-blockquote.png" />
  <blockquote class="vf-blockquote__quote">
    It's not enough to be efficient:
    we must also be innovative in
    our ways of working
  </blockquote>
  <div class="vf-blockquote__author">Magnus Hall</div>
  <div class="vf-blockquote__author-title">PRESIDENT AND CEO</div>
</div>
```


### Responsive Display

The HTML Specimen supports the same responsive options as the React Specimen. To read more about the options and configuration, visit the [React Specimen](/specimens/react#responsive-display) page.

```html
showSource: true
responsive: true
---
<div class="vf-container">
  <div class="vf-blockquote">
  <img class="vf-blockquote__illustration" src="/img/example-blockquote.png" />
  <blockquote class="vf-blockquote__quote">
    It's not enough to be efficient:
    we must also be innovative in
    our ways of working
  </blockquote>
  <div class="vf-blockquote__author">Magnus Hall</div>
  <div class="vf-blockquote__author-title">PRESIDENT AND CEO</div>
</div>
</div>
```
