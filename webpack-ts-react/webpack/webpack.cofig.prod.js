const { merge } = require("webpack-merge");

// 压缩js
const TerserPlugin = require("terser-webpack-plugin");
// 清理原来的打包文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { commonConfig } = require("./webpack.config.common");

module.exports = merge(
    commonConfig,
    {
        mode: "production",
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    // 压缩js
                    test: /\.js$/,
                    // // 删除注释
                    terserOptions: {
                        format: {
                            comments: false,
                        },
                    },
                    extractComments: false,
                }), // 压缩js
            ],
            splitChunks: {
                chunks: 'all',
            }
        },
        plugins: [
            new CleanWebpackPlugin()
        ]
    }
)