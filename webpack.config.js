const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader', 'babel-loader'],
                exclude: /node_modules/,
            },
            { test: /\.svg$/, use: 'svg-url-loader' },
            {test: /\.(less|css)$/, use: ['style-loader', 'css-loader', 'less-loader']},
      ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'}),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/assets'), to: "assets" },
            ],
        }),
    ],
    mode: 'development'
}