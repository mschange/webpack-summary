const { merge } = require("webpack-merge");
// 压缩css
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 压缩js
const TerserPlugin = require("terser-webpack-plugin");

const { commonConfig } = require("./webpack.config.common");

module.exports = merge(
    commonConfig,
    {
        mode: "production",
        optimization: {
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin(), // 压缩css
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
        },
        performance: {
            // hints: "warning", // 枚举
            // hints: "error", // 性能提示中抛出错误
            hints: false, // 关闭性能提示
            maxAssetSize: 200000, // 整数类型（以字节为单位）
            maxEntrypointSize: 400000, // 整数类型（以字节为单位）
            assetFilter: function (assetFilename) {
                // 提供资源文件名的断言函数
                return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
            }
        }
    }
)