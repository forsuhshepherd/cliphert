const HTMLWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require("vue-loader");
const path = require("path");
const {ModuleReplacementPlugin} = require('webpack');
const { join } = require('path');

module.exports = {
    entry: {
      main: "./src/main.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
      ],
    },
    plugins: [
      new ModuleReplacementPlugin(),
      new VueLoaderPlugin(),
      new HTMLWebpackPlugin({
        options: {
          showErrors: true,
          cache: 'true',
          title: 'Cliphert',
          template: join(__dirname, 'index.html')
        }
      })
    ],
    resolve: {
      alias: {
        vue$: "vue/dist/vue.runtime.esm.js",
      },
      extensions: ["*", ".js", ".vue", ".json"],
    },
  };