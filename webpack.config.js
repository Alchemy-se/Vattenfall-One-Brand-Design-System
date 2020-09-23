var path = require('path');

module.exports = {
	//mode: 'production',
	entry: path.join(__dirname, 'js/app.js'),
	output: {
		path: path.join(__dirname, 'dist/js'),
		filename: 'horizon.min.js'
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};
