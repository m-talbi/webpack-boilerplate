// eslint-disable-next-line
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/style.css',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Name',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
