## Examples

All typography examples are on the bottom of this page.

## SASS Mixins

The typography is available as SASS mixins as well as classes.

If you prefer to use mixins the following mixins are available and gives the same styling as in the examples above:

How to use a typography mixin:

``` 
.your-class {
  @include typo-preamble()
}
```

### Available mixins

- typo-preamble()
- typo-primary()
- typo-secondary()
- typo-tetriary()
- typo-quaternary()
- typo-paragraph-primary()
- typo-paragraph-secondary()

Refer to the file `scss/_type.scss` for more details.

## Skip generating typography classes

If you only use mixins you can choose not to generate all the class names to keep down your CSS file size.

Do this by setting the variable `$enable-typography-classes` to `false`.

## Basic text components

### H1

```html
responsive: true
---
<h1>h1. Vattenfall Heading</h1>
```

### H2

```html
responsive: true
---
<h2>h2. Vattenfall Heading</h2>
```

### H3

```html
responsive: true
---
<h3>h3. Vattenfall Heading</h3>
```

### H4

```html
responsive: true
---
<h4>h4. Vattenfall Heading</h4>
```

### Standard text

```html
responsive: true
---
<p>Standard text with no extra styles.</p>
```

### Smaller text (.vf-typo-p-secondary)
```html
responsive: true
---
<p class="vf-typo-p-secondary">Smaller text with no extra styles.</p>
```

### Preamble (.vf-preamble)
```html
responsive: true
---
<p class="vf-preamble">Preamble</p>
```

### Intro in Caps (.vf-intro-in-caps)
```html
responsive: true
---
<p class="vf-intro-in-caps">Intro in caps</p>
```

### Intro in Caps - Small (.vf-intro-in-cap-small)
```html
responsive: true
---
<p class="vf-intro-in-cap-small">Intro in caps - smaller</p>
```
