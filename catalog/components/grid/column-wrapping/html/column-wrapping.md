
### Column wrapping

If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.

```html
<div class="vf-row">
  <div class="vf-col-9">.vf-col-9</div>
  <div class="vf-col-4">.vf-col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
  <div class="vf-col-6">.vf-col-6<br>Subsequent columns continue along the new line.</div>
</div>
```
