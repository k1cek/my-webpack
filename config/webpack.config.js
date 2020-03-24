const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        mainDev: './src/index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../', 'build')
    },
    devServer: { // otwarcie odrazu w nowym oknie. Mozna również dodac --open w jsonie na koncu "start"
        open: true,
        contentBase: path.resolve(__dirname, '../', 'public') // wyswietlenie statyczne zdjecia
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: "raw-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|png|svg|gif|jpeg)$/,
                use: 'file-loader',
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
        new CleanWebpackPlugin(), // nowa instancja
        new HtmlWebpackPlugin({
            title: "nowa apka",
            template: "src/templates/template.html"
        }),
    ]
}