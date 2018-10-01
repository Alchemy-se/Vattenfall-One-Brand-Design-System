A bunch of different buttons.

### Primary buttons / Large

```html
<div class="vf-row">
  <div class="vf-col">
    <button type="button" class="vattenfall-btn vattenfall-btn--lg vattenfall-btn--primary">Yellow button</button>
  </div>
  <div class="vf-col">
    <button type="button" class="vattenfall-btn vattenfall-btn--lg vattenfall-btn--secondary">Blue Button</button>
  </div>
</div>
<div class="vf-row" style="padding-top: 20px">
  <div class="vf-col">
    <button type="button" disabled class="vattenfall-btn vattenfall-btn--lg vattenfall-btn--primary">Disabled</button>
  </div>
    <div class="vf-col">
    <button type="button" disabled class="vattenfall-btn vattenfall-btn--lg vattenfall-btn--secondary">Disabled</button>
  </div>
</div>
```

### Primary buttons / Medium

```html
<div class="vf-row">
  <div class="vf-col">
    <button type="button" class="vattenfall-btn  vattenfall-btn--primary">Yellow button</button>
  </div>
  <div class="vf-col">
    <button type="button" class="vattenfall-btn  vattenfall-btn--secondary">Blue Button</button>
  </div>
</div>
<div class="vf-row" style="padding-top: 20px">
  <div class="vf-col">
    <button type="button" disabled class="vattenfall-btn  vattenfall-btn--primary">Disabled</button>
  </div>
  <div class="vf-col">
    <button type="button" disabled class="vattenfall-btn  vattenfall-btn--secondary">Disabled</button>
  </div>
</div>
```

### Outlined buttons / Large

```html
<div class="vf-row">
  <div class="vf-col">
    <button type="button" class="vattenfall-btn vattenfall-btn--lg vattenfall-btn--outline-dark">Dark button</button>
  </div>
  <div class="vf-col">
    <button type="button" class="vattenfall-btn vattenfall-btn--lg vattenfall-btn--outline-secondary">Blue Button</button>
  </div>
</div>
<div class="vf-row" style="padding-top: 20px">
  <div class="vf-col">
    <button type="button" disabled class="vattenfall-btn vattenfall-btn--lg vattenfall-btn--outline-dark">Disabled</button>
  </div>
  <div class="vf-col">
    <button type="button" disabled class="vattenfall-btn vattenfall-btn--lg vattenfall-btn--outline-secondary">Disabled</button>
  </div>
</div>
```

### Outlined buttons / Medium

```html
<div class="vf-row">
  <div class="vf-col">
    <button type="button" class="vattenfall-btn  vattenfall-btn--outline-dark">Dark button</button>
  </div>
  <div class="vf-col">
    <button type="button" class="vattenfall-btn  vattenfall-btn--outline-secondary">Blue Button</button>
  </div>
</div>
<div class="vf-row" style="padding-top: 20px">
  <div class="vf-col">
    <button type="button" disabled class="vattenfall-btn  vattenfall-btn--outline-dark">Disabled</button>
  </div>
  <div class="vf-col">
    <button type="button" disabled class="vattenfall-btn  vattenfall-btn--outline-secondary">Disabled</button>
  </div>
</div>
```
### Button combinations

Coming soon

### Full width buttons

Create block level buttons—those that span the full width of a parent—by adding .vattenfall-btn--block.

```html
<button type="button" class="vattenfall-btn vattenfall-btn--primary vattenfall-btn--block">Block level button</button>
<button type="button" class="vattenfall-btn vattenfall-btn--secondary vattenfall-btn--block">Block level button</button>
```

### Active state
Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. There’s no need to add a class to <button>s as they use a pseudo-class. However, you can still force the same active appearance with .active (and include the aria-pressed="true" attribute) should you need to replicate the state programmatically.

```html
<a href="#" class="vattenfall-btn vattenfall-btn--primary vattenfall-btn--lg active" role="button" aria-pressed="true">Primary link</a>
<a href="#" class="vattenfall-btn vattenfall-btn--secondary vattenfall-btn--lg active" role="button" aria-pressed="true">Link</a>
```