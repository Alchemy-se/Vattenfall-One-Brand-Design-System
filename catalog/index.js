import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./main.js";

// jquery is required to be global
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

import Video from './Video'


ReactDOM.render(
	<Main />,
	document.getElementById("main")
);
