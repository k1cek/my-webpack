const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        mainProd: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../', 'build')
    }
}