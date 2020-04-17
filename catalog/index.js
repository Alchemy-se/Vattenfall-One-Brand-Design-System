import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./main.js";
const PACKAGE = require("../package.json");

import ReactGA from 'react-ga';
ReactGA.initialize('UA-159160070-1');

//All this needed?
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

import Welcome from './WELCOME';
import Video from './Video'

console.log("#DEBUG here #");

ReactDOM.render(
	<Main />,
	document.getElementById("main")
);
