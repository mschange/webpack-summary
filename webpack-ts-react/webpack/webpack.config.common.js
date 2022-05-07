const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = {
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "[name]_[chunkhash].bundle.js"
    },
    module: {
        rules: [
            // 对css文件的处理
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // 对less文件的处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            // 对ts|tsx文件的处理
            {
                test: /\.(ts|tsx)$/,
                use: [
                    "babel-loader",
                    'ts-loader',
                ],
                exclude: /node_modules/
            },
            // 对图片的处理
            {
                test: /\.(svg|png|jpg|gif|jpeg)$/,
                type: "asset/resource",
            },
            // {
            //     // test 指定的是规则生效的文件
            //     test: /\.tsx?$/,
            //     // 要使用的 loader
            //     use: 'ts-loader',
            //     // 要排除的文件
            //     exclude: /node_modules/
            // }
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