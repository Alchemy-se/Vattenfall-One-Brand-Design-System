
### Setting one column width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.

```html
<div class="vf-container">
  <div class="vf-row">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">1 of 3</div>
    </div>
    <div class="vf-col-6">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">2 of 3 (wider)</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">3 of 3</div>
    </div>
  </div>
  <div class="vf-row">
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">1 of 3</div>
    </div>
    <div class="vf-col-5">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">2 of 3 (wider)</div>
    </div>
    <div class="vf-col">
      <div style="border: 2px rgba(255,0,0,0.3) solid; padding: 10px;">3 of 3</div>
    </div>
  </div>
</div>
```
