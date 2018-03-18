const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./jalali-moment.js", // string | object | array
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: "jalali-moment.js", // string
        // the url to the output directory resolved relative to the HTML page
        library: "jalali-moment", // string,
        // the name of the exported library
        libraryTarget: "umd", // universal module definition
        // the type of the exported library
    },
    mode: 'production',
    plugins: [
        // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /fa/),
        new UglifyJSPlugin()
    ]
}