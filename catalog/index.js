import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./main.js";

//All this needed?
console.log("#DEBUG 1 #");
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

import Video from './Video'


ReactDOM.render(
	<Main />,
	document.getElementById("main")
);
