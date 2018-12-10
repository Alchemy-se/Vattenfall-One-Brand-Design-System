## Quick start

To start using this design system, add the JS and CSS files to your site by following the steps below.

### Installation

 - Install with [npm](https://www.npmjs.com/): `npm install @alchemy-vf/vattenfall-design-system`
 - Install with [yarn](https://yarnpkg.com/): `yarn add @alchemy-vf/vattenfall-design-system`
Coming soon:
- ~~- [Download the latest release.](unpkg.com/react@16.0.0/umd/react.production.min.js)~~

### CSS

Copy-paste the stylesheets `<link>` into your `<head>` before all other stylesheets to load our CSS.

```
<link rel="stylesheet" href="node_modules/@vf-alchemy/vattenfall-design-system/dist/css/reboot.min.css"">
<link rel="stylesheet" href="node_modules/@vf-alchemy/vattenfall-design-system/dist/css/main.min.css"">
```

### JS

There is yet no functionality that uses javascript, but will be added.


## Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

```
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="node_modules/@vf-alchemy/vattenfall-design-system/dist/css/reboot.min.css"">
    <link rel="stylesheet" href="node_modules/@vf-alchemy/vattenfall-design-system/dist/css/main.min.css"">

    <title>Vattenfall Horizon Boilerplate!</title>
  </head>
  <body>
    <h1>I'm using Vattenfall Horizon!</h1>

    <!-- Optional JavaScript -->
  </body>
</html>
```

That's all you need for overall page requirements. 

### SCSS

You can choose to only include certain components and mixins from the design system if you choose. There is however a few things that you need to take into consideration then.

#### Autoprefixer
Make sure your build process uses autoprefixer to ensure vendor prefixes are automatically added to your output CSS.

#### Global SCSS variables
These variables are used to configure which parts of the SCSS get compiled and some colors and such.

All variables are found in `_variables.scss`.

These flags are set for you by default when you @import the styles.scss file. You can override these default settings by redeclaring the variables.

#### Importing SCSS files
To add a component style to your build, simply import the component directly.

@import 'node_modules/@vf-alchemy/vattenfall-design-system/scss/components/card';

Importing a component this way will bring in any dependencies that component has as well. The import system removes duplicate dependencies, so shared dependencies between components will not create extra CSS.

#### Namespacing
Horizon Components are built to be included individually and not clobber global styles - all class attributes are prefixed by the vf-- moniker. 

## Important globals

VF Design System employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### HTML5 doctype

VF Design System requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

```
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag

VF Design System is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

```
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

You can see an example of this in action in the [starter template](#starter-template).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

```
.selector-for-some-widget {
  box-sizing: content-box;
}
```

With the above snippet, nested elements—including generated content via `::before` and `::after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

For improved cross-browser rendering, we use [Reboot](/content/reboot/) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.
