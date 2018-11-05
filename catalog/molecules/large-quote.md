Large quote component features a prominent image, a quote and a byline.


```html
responsive: true
---
<div class="p-3" style="background: white;">
  <article class="vf-large-quote d-flex justify-content-end">
    <div class="vf-large-quote__illustration">
      <img class="vf-large-quote__illustration-cutout" src="/img/example-startpage/magnus-hall.png" />
      <img class="vf-large-quote__illustration-bg" src="/img/example-startpage/quote-bg.png" />
    </div>

    <div class="vf-large-quote__content">
      <div class="vf-large-quote__byline">
        <h5 class="my-0">Magnus Hall</h5>
        <div class="vf-intro-in-caps-small">PRESIDENT AND CEO</div>
      </div>
      <blockquote class="vf-large-quote__quote">
        It's not enough to be efficient: we must also be innovative in our ways of working
      </blockquote>
    </div>
  </article>
</div>
```