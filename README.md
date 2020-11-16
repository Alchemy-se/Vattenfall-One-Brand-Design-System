# Vattenfall-One-Brand-Design-System 

A shared component library based on the Vattenfall Design System.

This README is about how to work on the Vattenfall Design System, if you are looking for the technical documentation of how to use this in your own application, head to:
https://digitaldesign.vattenfall.com

## Quick start

- Clone the repo: `git clone git@github.com:Alchemy-se/Vattenfall-One-Brand-Design-System.git`

### Cms
For handling metadata and also login in the /overview table when developing we have an cms for that. Its located in bitbucket 
vf-dds-cms repo. You need .envs located in the 1password vault for vattenfall.  
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

## Documentation

The documentation is powered by a system called Catalog, which is a React app that renders the documentation. 
The source for the documentation is in the folder `./catalog`.

The documentation for Catalog is available at https://docs.catalog.style/configuration/pages

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

## Deployment

### Connecting to Google Container Cloud - digitaldesign.vattenfall.com

Make sure you have `gcloud` command line tools installed.

Login to google cloud and configure the project
```sh
gcloud auth login
```

Run the deployment script (you will need the Private SSL key):
```sh
./deploy.sh
```

The disk may occassionally fill up due to old Docker images. This can cause unexpected behaviour, and is hard to debug as no error messages may appear on Google Cloud. 
To prevent this, be sure to occasionally prune the unused Docker images by ssh (use the command displayed on the "VM instance details" page, under remote access) into the instance and running: ```sh docker image prune -a ``` . If the disk happens to already be full, just increase the disk space temporarily on Google Cloud, (Left menu -> Disks -> vf-docker-instance -> Edit -> [increase size] ), then prune the images.

### Docker 

You can also run this repo as a docker image. 

Build the docker image: 
```sh
docker build -t vattenfallds .
```

Start a docker container with the previously built image, binding port 4040
```sh
docker run -p 4040:80 vattenfallds
```


