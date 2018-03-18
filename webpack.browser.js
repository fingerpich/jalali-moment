const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./jalali-moment.js", // string | object | array
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: "jalali-moment.browser.js", // string
        library: "moment", // string,
    },
    plugins: [
        // new UglifyJSPlugin()
    ],
    mode: 'production',
    devtool: 'source-map'
}