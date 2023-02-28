const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[index].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index_test.html',
    }),
    new HtmlWebpackPlugin({
      title: 'index',
      template: path.resolve(__dirname, './src/pages/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'about',
      template: path.resolve(__dirname, './src/pages/about.html'),
      filename: 'about.html',
    }),
  ],
};