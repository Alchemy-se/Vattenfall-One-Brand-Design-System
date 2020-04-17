var path = require('path');

module.exports = {
	mode: "development",
	entry: path.join(__dirname, 'catalog/index.js'),
	output: {
		path: path.join(__dirname, 'dist/js'),
		filename: 'horizon.min.js'
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	devServer: {
		inline: true,
		contentBase: path.join(__dirname, 'dist'),
		watchContentBase: true,
		liveReload: true
	},
	module: {
		rules: [
			{
				 test: /\.md$/i,
				 use: 'raw-loader',
			 },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				loader:
					"style-loader!css-loader?modules&importLoaders=true&localIdentName=[name]__[local]--[hash:base64:5]"
			}
		],
	},
	resolve: {
		modules: ["node_modules", path.resolve(__dirname, "catalog")],
	}
};