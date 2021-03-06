const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
        // inject: "body"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 3. Inject styles into DOM
                    "css-loader", // 2. Turns css into commonjs
                    "sass-loader"// 1. Turns sass into css
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource',
                generator: { 
                    filename: 'imgs/[name][hash][ext]'
                }
            }
        ]
    }, 
    optimization: {
        minimizer: [new TerserPlugin({
          extractComments: false,
        })],
      },
}
