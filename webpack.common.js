const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js',
        recipes: ["@babel/polyfill", './src/js/recipes.js']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'images'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/templates/index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'recipes.html',
            template: './src/templates/recipes.html',
            chunks: ['recipes']
        })
    ]
}