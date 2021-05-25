const {VueLoaderPlugin} = require("vue-loader");
const path = require("path");
const {ModuleReplacementPlugin} = require('webpack');

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
    ],
    resolve: {
      alias: {
        vue$: "vue/dist/vue.runtime.esm.js",
      },
      extensions: ["*", ".js", ".vue", ".json"],
    },
  };