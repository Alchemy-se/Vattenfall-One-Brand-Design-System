const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  console.log(env.NODE_ENV);


  console.log('argv: ', argv);


  const pathToEnv = `./.env.${env.NODE_ENV}`

  console.log('pathToEnv: ', pathToEnv)

  return {
    mode: "development",
    entry: path.join(__dirname, 'catalog/index.js'),
    output: {
      path: path.join(__dirname, 'dist/js/'),
      publicPath: "/js/",
      filename: 'main.min.js'
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
      // writeToDisk: true,
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /node_modules\/vfile\/core\.js/,
          use: [{
            loader: 'imports-loader',
            options: {
              type: 'commonjs',
              imports: ['single process/browser process'],
            },
          }],
        },
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
          loader: [
            "style-loader?sourceMap",
            "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
            "sass-loader?sourceMap"
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: ['file-loader']
        },

      ],
    },
    resolve: {
      modules: ["node_modules", path.resolve(__dirname, "catalog")]
    },
    plugins: [
      new CopyPlugin([{ from: "catalog/static", to: "../static" }]),
      new Dotenv({
        path: pathToEnv,
      })


    ]
  }
};
