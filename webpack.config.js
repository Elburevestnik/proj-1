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
            {test: /\.svg$/, use: 'svg-url-loader'},
            {
                test: /\.(css)$/, use: [
                    {
                        loader: 'css-loader',
                        options: {
                            camelCase: true,
                            exportLocalsConvention: 'camelCase',
                            modules: {
                                mode: "local",
                                auto: true,
                                exportGlobals: true,
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                localIdentContext: path.resolve(__dirname, "src"),
                                namedExport: true,
                                exportLocalsConvention: "camelCase",
                                exportOnlyLocals: false,
                            },
                        }
                    },
                   ]
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.less']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'src/assets'), to: "assets"},
            ],
        }),
    ],
    mode: 'development'
}