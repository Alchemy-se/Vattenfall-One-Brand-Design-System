var path = require('path')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')

const config = {
  mode: 'production',
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  module: {},
}

// All JS FILES
var horizon = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/app.js'),
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'horizon.min.js',
  },
})

// SINGLE JS FILES

// Parallax Image Block
var twoColumnsBoxes = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/components/two-column-boxes.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'parallax-image-block.min.js',
  },
})

// Drop-Down List
var dropDown = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/components/drop-down.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'drop-down-list.min.js',
  },
})

// Input
var input = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/components/input-field.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'input.min.js',
  },
})

// Tab Bar
var tabBar = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/components/tab-bar.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'tab-bar.min.js',
  },
})

// Preloader
var preloader = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/components/preloader.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'preloader.min.js',
  },
})

// Carousel
var carousel = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/components/carousel.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'carousel.min.js',
  },
})

// Tooltip
var tooltip = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/components/tooltip.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'tooltip.min.js',
  },
})

// Notification Module
var notificationModule = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/components/notification-module.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'notification-module.min.js',
  },
})

// GDPR Consent Module
var gdprConsentModule = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/components/gdpr-consent-module.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'gdpr-consent-module.min.js',
  },
})

// Upload
var upload = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/components/upload.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'upload.min.js',
  },
})

// Datepicker
var datepicker = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/components/datepicker.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'datepicker.min.js',
  },
})

// Navigation
var navigation = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/components/navigation.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'navigation.min.js',
  },
})

// Spinner
var spinner = Object.assign({}, config, {
  entry: path.join(__dirname, 'js/components/spinner.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'spinner.min.js',
  },
})

module.exports = [
  horizon,
  twoColumnsBoxes,
  dropDown,
  input,
  tabBar,
  preloader,
  carousel,
  tooltip,
  notificationModule,
  gdprConsentModule,
  datepicker,
  navigation,
  spinner
]
