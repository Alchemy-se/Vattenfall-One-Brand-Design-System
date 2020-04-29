
## Colors

```html
<p class="vf-text--body">.vf-text--body</p>
<p class="vf-text--muted">.vf-text--muted</p>

<p class="vf-text--muted">.vf-text--muted</p>

<p class="vf-text--primary">.vf-text--primary</p>
<p class="vf-text--secondary">.vf-text--secondary</p>
<p class="vf-text--success">.vf-text--success</p>
<p class="vf-text--warning">.vf-text--warning</p>
<p class="vf-text--danger">.vf-text--danger</p>
<p class="vf-text--light vf-bg--dark">.vf-text--light</p>
<p class="vf-text--dark">.vf-text--dark</p>
<p class="vf-text--blue-grey">.vf-text--blue-grey</p>

<p class="vf-text--dark-moss">.vf-text--dark-moss</p>
<p class="vf-text--dark-blue">.vf-text--dark-blue</p>
<p class="vf-text--dark-pink">.vf-text--dark-pink</p>
<p class="vf-text--dark-green">.vf-text--dark-green</p>
<p class="vf-text--dark-red">.vf-text--dark-red</p>
<p class="vf-text--dark-purple">.vf-text--dark-purple</p>

<p class="vf-text--light-yellow vf-bg--dark">.vf-text--light-yellow</p>
<p class="vf-text--light-green vf-bg--dark">.vf-text--light-green</p>
<p class="vf-text--light-turquoise vf-bg--dark">.vf-text--light-turquoise</p>
<p class="vf-text--light-blue vf-bg--dark">.vf-text--light-blue</p>
<p class="vf-text--light-red vf-bg--dark">.vf-text--light-red</p>
<p class="vf-text--light-grey vf-bg--dark">.vf-text--light-grey</p>

<p class="vf-text--white vf-bg--dark">.vf-text--white</p>
<p class="vf-text--black-50">.vf-text--black-50</p>
<p class="vf-text--white-50 vf-bg--dark">.vf-text--white-50</p>
```

Contextual text classes also work well on anchors with the provided hover and focus states. **Note that the `.text-white` and `.text-muted` class has no additional link styling beyond underline.**

```html
<p><a href="#" class="text-{{ color.name }}{% if color.name == "light" %} bg-dark{% endif %}">{{ color.name | capitalize }} link</a></p>

<p><a href="#" class="vf-text--"> link</a></p>



<p><a href="#" class="vf-text--muted">Muted link</a></p>
<p><a href="#" class="vf-text--white vf-bg--dark">White link</a></p>
```
## Background color

Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities **do not set `color`**, so in some cases you'll want to use `.text-*` utilities.

```html
<div class="p-3 mb-2 vf-bg--light-yellow">.vf-bg--light-yellow</div>
<div class="p-3 mb-2 vf-bg--light-green">.vf-bg--light-green</div>
<div class="p-3 mb-2 vf-bg--light-turquoise">.vf-bg--light-turquoise</div>
<div class="p-3 mb-2 vf-bg--light-blue">.vf-bg--light-blue</div>
<div class="p-3 mb-2 vf-bg--light-red">.vf-bg--light-red</div>
<div class="p-3 mb-2 vf-bg--light-grey">.vf-bg--light-grey</div>
<div class="p-3 mb-2 vf-bg--white text-dark">.vf-bg--white</div>
<div class="p-3 mb-2 vf-bg--transparent text-dark">.vf-bg--transparent</div>
```

## Borders

Borders can be used to separate sections of a site or service. 

```html
<div class="vf-bg--white">
  <div class="vf-container vf-container--tight">
    <section class="p-2">Dummy section</section>
    <section class="p-2 vf-border-top-gray-200">
      Border on top
    </section>
    <section class="p-2">Dummy section</section>
    <section class="p-2 vf-border-bottom-gray-200">
      Border on bottom
    </section>
    <section class="p-2">Dummy section</section>
  </div>


```