const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        mainDev: './src/index.js'
    },
    output: {
        filename: 'js/[name]-[contenthash].js',
        path: path.resolve(__dirname, '../', 'build')
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: "raw-loader"
            },
            {
                test: /\.(scss|sass)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|png|svg|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[contenthash:6].[ext]',
                        outputPath: 'images',
                    }
                }, {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            quality: 50,
                            progressive: true
                        }
                    }
                }]

            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["@babel/preset-env", { useBuiltIns: 'usage', corejs: "2.0.0" }]
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "nowa apka",
            template: "src/templates/template.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css'
        })
    ]
}