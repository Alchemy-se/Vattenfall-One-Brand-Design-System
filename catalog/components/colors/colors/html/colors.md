
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
