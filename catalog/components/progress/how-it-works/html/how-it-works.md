## How it works

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), ensuring you can stack progress bars, animate them, and place text labels over them.

- We use the `.vf-progress` as a wrapper to indicate the max value of the progress bar.
- We use the inner `.vf-progress-bar` to indicate the progress so far.
- The `.vf-progress-bar` requires an inline style, utility class, or custom CSS to set their width.
- The `.vf-progress-bar` also requires some `role` and `aria` attributes to make it accessible.

Put that all together, and you have the following examples.

```html
showSource: true
---
<div class="vf-progress">
  <div class="vf-progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="vf-progress">
  <div class="vf-progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="vf-progress">
  <div class="vf-progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="vf-progress">
  <div class="vf-progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="vf-progress">
  <div class="vf-progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

The component library provides a handful of [utilities for setting width](/spacing). Depending on your needs, these may help with quickly configuring progress.

```html
showSource: true
---
<div class="vf-progress">
  <div class="vf-progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```
