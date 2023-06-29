const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: 'development', // or 'production'
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['js', 'jsx'],
            exclude: ['node_modules'],
            overrideConfigFile: path.resolve(__dirname, '.eslintrc.json'),
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_DEBUG': JSON.stringify(false),
        }),
    ]
};
