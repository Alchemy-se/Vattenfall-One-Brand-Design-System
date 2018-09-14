# Vattenfall-One-Brand-Design-System

## Quick start

- Clone the repo: `git clone git@github.com:Alchemy-se/Vattenfall-One-Brand-Design-System.git`

Coming soon:
- ~~- [Download the latest release.](https://no-cdn-yet.com/vattenfall.zip)~~
- ~~- Install with [npm](https://www.npmjs.com/): `npm install vattenfall-design-system`~~
- ~~- Install with [yarn](https://yarnpkg.com/): `yarn add vattenfall-design-system`~~

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
vattenfall-design-system/
└── dist/
    ├── css/
    │   ├── reboot.css
    │   ├── reboot.css.map
    │   ├── reboot.min.css
    │   ├── reboot.min.css.map
    │   ├── main.css
    │   ├── main.css.map
    │   ├── main.min.css
    │   └── main.min.css.map
```

We provide compiled CSS (`main.*`), as well as compiled and minified CSS (`main.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/debug/readability/source-maps) (`.*.map`) are available for use with certain browsers' developer tools.


## Contributing

This requires you to have [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/lang/en/) installed on your machine. 
All commands are run in this folder.

Install all dependencies:

```sh
yarn
```

Start the development environment:

```sh
yarn watch
```

This will start a server on `http://localhost:4000` with the documentation site, as well as watch for changes in the CSS Library.

## CSS Library

All source SCSS files for the CSS Library are available in the `/scss` folder.
