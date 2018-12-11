import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

export default {
    mode: 'production',
    entry: path.join(__dirname, 'js/app.js'),
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: 'horizon.min.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    // plugins: [
    //     new ScriptExtHtmlWebpackPlugin({
    //         defaultAttribute: 'defer'
    //     })
    // ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};