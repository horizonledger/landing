const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const messageData = require('./src/data/message.json');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Handlebars Webpack Example',
            template: 'src/templates/index.hbs',
            inject: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            templateParameters: {
                'title': 'Handlebars Webpack Example',
                'message': messageData.message
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/styles', to: 'dist/styles' }  // copy all files in src/styles to dist/styles
            ]
        })
        // new MiniCssExtractPlugin({
        //     filename: 'main.css',
        // })
    ]
};

// const ESLintPlugin = require('eslint-webpack-plugin');
//     plugins: [
//         new ESLintPlugin({
//             extensions: ['js', 'jsx'],
//             exclude: ['node_modules'],
//             overrideConfigFile: path.resolve(__dirname, '.eslintrc.json'),
//         }),
//         new webpack.DefinePlugin({
//             'process.env.NODE_DEBUG': JSON.stringify(false),
//         }),
//     ]
// };
