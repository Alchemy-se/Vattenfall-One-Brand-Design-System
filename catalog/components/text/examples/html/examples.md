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

Refer to the file `scss/_typo.scss` for more details.

## Skip generating typography classes

If you only use mixins you can choose not to generate all the class names to keep down your CSS file size.

Do this by setting the variable `$enable-typography-classes` to `false`.
