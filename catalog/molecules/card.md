The card is mostly used for presenting shorter, article like, content segments. Like news posts.

```html
responsive: true
---
<article class="vf-card reveal" style="max-width: 400px">
  <img src="/img/example-startpage/news1-heating-hamburg.png" class="vf-card__img-top" alt="Example image" />
  <div class="vf-card__body">
    <h3 class="vf-card__title">
        Vattenfall sells heating system in Hamburg
    </h3>
    <p class="vf-card__text">
        The City of Hamburg has announced that it will make use of the call option agreed with Vattenfall in 2014 to take over.
    </p>
  </div>
</article>
```

## As a link

Simply change the `<article>` tag to a `<a>` tag to make the whole article a link.

```html
responsive: true
---
<a class="vf-card reveal" style="max-width: 400px" href="#">
  <img src="/img/example-startpage/news1-heating-hamburg.png" class="vf-card__img-top" alt="Example image" />
  <div class="vf-card__body">
    <h3 class="vf-card__title">
        Vattenfall sells heating system in Hamburg
    </h3>
    <p class="vf-card__text">
        The City of Hamburg has announced that it will make use of the call option agreed with Vattenfall in 2014 to take over.
    </p>
  </div>
</a>
```