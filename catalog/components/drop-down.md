Various drop-down lists.

### Standard with semantic elements

```html
showSource: true
---

<main class="vf-row">
    <section class="vf-dropdown semantic-arrow disabled" >
        <select class="vf-dropdown-semantic disabled" data-control="vf-dropdown-data-disabled" >
            <option selected disabled class="vf-dropdown-semantic-option">
                <label class="vf-dropdown-label">Select option</label>
            </option>
            <section class="vf-dropdown-list">
                <article class="vf-dropdown-list-item">
                    <option value="Winter">
                        <label class="vf-dropdown-option">
                            Winter
                        </label>
                    </option>
                </article>
                <article class="vf-dropdown-list-item">
                    <option value="Spring">
                        <label class="vf-dropdown-option">
                            Spring
                        </label>
                    </option>
                </article>
                <article class="vf-dropdown-list-item">
                    <option value="Summer">
                        <label class="vf-dropdown-option">
                            Summer
                        </label>
                    </option>
                </article>
                <article class="vf-dropdown-list-item">
                    <option value="Autumn">
                        <label class="vf-dropdown-option">
                            Autumn
                        </label>
                    </option>
                </article>
            </section>
        </select>
        <!--<section class="arrow" />-->
    </section>
</main>
```

### Standard

```html
showSource: true
---

<div class="vf-row">
  <div class="vf-dropdown" data-control="vf-dropdown-data">
    <label class="vf-dropdown-label">Select option</label>
    <div class="vf-dropdown-list">
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Winter
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Spring
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Summer
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Autumn
        </label>
      </div>
    </div>
  </div>
</div>
```

### Underline style

To use the underline style, simply add the modifier class `vf-dropdown--underline` to the `vf-dropdown` element.

```html
showSource: true
---
<div class="vf-row">
  <div class="vf-dropdown vf-dropdown--underline" data-control="vf-dropdown-data">
    <label class="vf-dropdown-label">Select option</label>
    <div class="vf-dropdown-list">      
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Winter
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Spring
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Summer
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Autumn
        </label>
      </div>
    </div>
  </div>
</div>
```

### Disabled

To disable a drop-down, simply add the modifier class `disabled` to the `vf-dropdown` element, and change the `data-control` attribute to `vf-dropdown-data-disabled`

```html
showSource: true
---
<div class="vf-row">
  <div class="vf-dropdown disabled" data-control="vf-dropdown-data-disabled">
    <label class="vf-dropdown-label">Select option</label>
    <div class="vf-dropdown-list">
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Winter
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Spring
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Summer
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <label class="vf-dropdown-option">
          Autumn
        </label>
      </div>
    </div>
  </div>
</div>
```

### With checkboxes

To add checkboxes, simply add `inputs` before the `label` within the `vf-dropdown-list-item` element. The `name` attribute must be `vf-dropdown-group`, and the `value` attribute must be the same as the `label`.

```html
showSource: true
---
<div class="vf-row">
  <div class="vf-dropdown" data-control="vf-dropdown-data">
    <label class="vf-dropdown-label">Select option</label>
    <div class="vf-dropdown-list">
      <div class="vf-dropdown-list-item">
        <input type="checkbox" name="vf-dropdown-group" value="Winter" />
        <label class="vf-dropdown-option">
          Winter
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <input type="checkbox" name="vf-dropdown-group" value="Spring" />
        <label class="vf-dropdown-option">
          Spring
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <input type="checkbox" name="vf-dropdown-group" value="Summer" />
        <label class="vf-dropdown-option">
          Summer
        </label>
      </div>
      <div class="vf-dropdown-list-item">
        <input type="checkbox" name="vf-dropdown-group" value="Autumn" />
        <label class="vf-dropdown-option">
          Autumn
        </label>
      </div>
    </div>
  </div>
</div>
```
