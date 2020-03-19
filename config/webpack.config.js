const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        mainDev: './src/index.js'
    },
    output: {
        filename: '[name][hash].js',
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
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // nowa instancja
        new HtmlWebpackPlugin({
            title: "nowa apka",
            template: "src/template.html"
        })
    ]
}