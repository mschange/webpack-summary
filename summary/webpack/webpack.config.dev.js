const { merge } = require("webpack-merge");

const { commonConfig } = require("./webpack.config.common");

module.exports = merge(
    commonConfig,
    {
        mode: "development",
        devtool: "source-map",
        devServer: {
            // host
            host: "127.0.0.1",
            // 端口
            port: 8000,
            // 热更新
            hot: true,
            // 启动时打开浏览器
            open: true,
        },
    }
)