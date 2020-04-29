var path = require('path');

module.exports = {
	mode: "development",
	entry: path.join(__dirname, 'catalog/index.js'),
	output: {
		path: path.join(__dirname, 'dist/js/'),
		publicPath: "/js/",
		filename: 'horizon.min.js'
	},
	stats: {
		colors: true
	},
	watchOptions: {
		ignored: ["node_modules", ".idea"]
	},
	devtool: 'source-map',
	devServer: {
		inline: true,
		hot: true,
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true
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
			},
			{
				test: /\.scss$/,
				loaders: [
					"style-loader?sourceMap",
					"css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
					"sass-loader?sourceMap"
				]
			}
		],
	},
	resolve: {
		modules: ["node_modules", path.resolve(__dirname, "catalog")],
	}
};