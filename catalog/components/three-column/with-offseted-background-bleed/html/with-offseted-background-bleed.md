
## Three columns with offseted background bleed

To achieve offseted background bleed, simply add a negative `margin-top` to the `.container` element, and a positive `margin-top` style to the containing `.container-bleed` element.

```
<!-- The styles here are examples, and should of course be in the css file and handle the responsive states. -->
<section class="vf-container-bleed" style="margin-top: 300px">
  <div class="vf-container" style="margin-top: -300px">
    <!-- 
      ... regular three column grid here
    -->
  </div>
</section>
``` 


```html
showSource: true
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
