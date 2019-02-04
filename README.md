# Vattenfall-One-Brand-Design-System

A shared component library based on the Vattenfall Design System.

This README is about how to work on the Vattenfall Design System, if you are looking for the technical documentation of how to use this in your own application, head to:
http://vattenfall.alchemystudio.se/

## Quick start

- Clone the repo: `git clone git@github.com:Alchemy-se/Vattenfall-One-Brand-Design-System.git`

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

## Deployment

You can run this repo as a docker image. 

Build the docker image: 
```sh
docker build -t vattenfallds .
```

Start a docker container with the previously built image, binding port 4040
```sh
docker run -p 4040:80 vattenfallds
```

Now you should be able to login with the following details: 
- user: `vf-test` pass: `v4tt3nf4ll`

 and see the design system documentation on `http://localhost:4040`


### Connecting to Google Container Cloud 

Make sure you have `gcloud` command line tools installed.

Login to google cloud
```sh
gcloud auth login
```

Select the project `vattenfall-design-system`
```sh
gcloud config set project vattenfall-design-system
```

Tag a docker image to be able to upload it to the continer registry.

```sh
docker tag vattenfallds eu.gcr.io/vattenfall-design-system/vattenfallds
```

The first `vattenfallds` is the local docker image name. The second argument is made up from the `[HOST]/[PROJECT]/[docker-tag]`

Upload the tagged image to google container registry

```sh
docker push eu.gcr.io/vattenfall-design-system/vattenfallds
```

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



