
## Colors

```html
<p class="text-{{ color.name }}{% if color.name == "light" %} bg-dark{% endif %}">.text-{{ color.name }}</p>{% endfor %}
<p class="text-body">.text-body</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
<p class="text-black-50">.text-black-50</p>
<p class="text-white-50 bg-dark">.text-white-50</p>
```

Contextual text classes also work well on anchors with the provided hover and focus states. **Note that the `.text-white` and `.text-muted` class has no additional link styling beyond underline.**

```html
<p><a href="#" class="text-{{ color.name }}{% if color.name == "light" %} bg-dark{% endif %}">{{ color.name | capitalize }} link</a></p>{% endfor %}
<p><a href="#" class="text-muted">Muted link</a></p>
<p><a href="#" class="text-white bg-dark">White link</a></p>
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

