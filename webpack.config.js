const path = require('path');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: "./dist/"
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' }
        ]
    }
};