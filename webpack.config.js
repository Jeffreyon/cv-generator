const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let path = require('path');

module.exports = {
    mode: 'development', // best place to add env variable checking
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    devServer: {
        static: './',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jp(e)g)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(eot|woff2|woff|ttf|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.docx$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name].docx'
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin()
    ]
}