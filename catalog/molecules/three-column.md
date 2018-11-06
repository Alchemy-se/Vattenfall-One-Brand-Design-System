# Three columns

The three column content box is made using the regular Grid system, but gives an example of how you can use the grid in a way fitting to Vattenfall's design guidelines.

```html
responsive: true
---
<section class="pt-6 pb-5 vf-bg--light-blue vf-container-bleed">
  <div class="vf-container">
    <h2 class="vf-text--center pb-3 pt-2 reveal">Example headline</h2>
    <div class="vf-row">
      <div class="vf-col-md-4 pb-2">
        <div style="width: 100%; height: 360px; background: pink"></div>
      </div>
      <div class="vf-col-md-4 pb-2">
          <div style="width: 100%; height: 360px; background: pink"></div>
        </div>
      <div class="vf-col-md-4 pb-2">
          <div style="width: 100%; height: 360px; background: pink"></div>
        </div>
    </div>
  </div>
</section>
```

## Three column with background bleed

Wrap the `.container` element in another element with the `.container-bleed` class.

```
<section class="container-bleed">
  <div class="container">
    <!-- 
      ... regular three column grid here
    -->
  </div>
</section>
``` 

## Three column with offseted background bleed

To get a offseted background bleed, simply add a negative `margin-top` to the `.container` element, and a positive `margin-top` style to the containing `.container-bleed` element.

```
<!-- The styles here are examples, and should of course be in the css file and handle the responsive states. -->
<section class="container-bleed" style="margin-top: 300px">
  <div class="container" style="margin-top: -300px">
    <!-- 
      ... regular three column grid here
    -->
  </div>
</section>
``` 


```html
responsive: ['Desktop']
---
<section class="pt-6 pb-5 vf-bg--light-blue vf-container-bleed" style="margin-top: 300px">
  <div class="vf-container" style="margin-top: -400px">
    <h2 class="vf-text--center pb-3 pt-2 reveal">Example headline</h2>
    <div class="vf-row">
      <div class="vf-col-md-4 pb-2">
        <div style="width: 100%; height: 360px; background: pink"></div>
      </div>
      <div class="vf-col-md-4 pb-2">
          <div style="width: 100%; height: 360px; background: pink"></div>
        </div>
      <div class="vf-col-md-4 pb-2">
          <div style="width: 100%; height: 360px; background: pink"></div>
        </div>
    </div>
  </div>
</section>
```
