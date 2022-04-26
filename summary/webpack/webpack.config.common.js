const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = {
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                //处理图片资源
                test: /\.(png|jpg|jpeg|gif|bmp)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html$/,
                use: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title 配置
            title: "Webpack V5",
            // 模板导入
            template: path.resolve(__dirname, "../public/index.html"),
            // 名称为
            filename: "index.html",
        })
    ]
}
module.exports = {
    commonConfig
}