const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const CopyPlugin = require("copy-webpack-plugin");

process.env.NODE_ENV = "production";

module.exports = {
  mode: "production",

  devtool: "none",

  // 设置多个入口文件
  entry: {
    index: "./src/js/data.js",
    home: "./src/js/event.js",
  },
  output: {
    // hash 防止文件覆盖，出现缓存的文件
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      // 模板文件
      template: "./src/404.html",
      // 输出文件名字
      filename: "404.html",
      // 压缩配制
      minify: {
        // 移除不用的双引号
        removeAttributeQuotes: true,
        // 移除空行
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
      // 不需要在底部导入js文件
      inject: false,
      hash: true,
    }),
    new HtmlWebpackPlugin({
      // 模板文件
      template: "./src/competition.html",
      // 输出文件名字
      filename: "competition.html",
      // 压缩配制
      minify: {
        // 移除不用的双引号
        removeAttributeQuotes: true,
        // 移除空行
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
      // 不需要在底部导入js文件
      inject: false,
      hash: true,
    }),

    // 打包时自动清除dist目录
    new CleanWebpackPlugin(),

    // copy文件
    new CopyPlugin([
      { from: "./src/images", to: "./images" },
      { from: "./src/css", to: "./css" },
      { from: "./src/favicon.ico", to: "./favicon.ico" },
    ]),
  ],

  resolve: {
    // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
    modules: [path.resolve(__dirname, "node_modules")],
  },

  // 配制打包
  module: {
    rules: [
      // js兼容
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          // 告诉babel做怎样的兼容处理
          presets: [
            [
              "@babel/preset-env",
              {
                // 按需加载兼容配制
                useBuiltIns: "usage",
                // 指定core-js的版本
                corejs: {
                  version: 3,
                },
                // 指定兼容到哪个版本的兼容
                targets: {
                  chrome: "60",
                  firefox: "60",
                  ie: "9",
                  safari: "10",
                  edge: "17",
                },
              },
            ],
          ],
        },
      },

      // eslint检测语法
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   // 优先执行这个
      //   enforce: 'pre',
      //   loader: 'eslint-loader',
      //   options: {
      //     // 自动修复语法错误
      //     fix: true,
      //   },
      // },
    ],
  },
};
