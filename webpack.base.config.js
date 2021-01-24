const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};

module.exports = {
  entry: { app: PATHS.src },

  output: {
    path: PATHS.dist,
    filename: '[name].js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
    },

    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: { name: 'fonts/[name].[ext]' },
    },

    {
      test: /\.pug$/,
      loader: 'pug-loader',
      options: { pretty: true },
    },

    {
      test: /\.scss$/,

      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,

        {
          loader: 'css-loader',
          options: { sourceMap: true },
        },

        {
          loader: 'postcss-loader',
          options: { sourceMap: true },
        },

        {
          loader: 'sass-loader',
          options: { sourceMap: true },
        },
      ],
    },

    {
      test: /\.css$/,

      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,

        {
          loader: 'css-loader',
          options: { sourceMap: true },
        },

        {
          loader: 'postcss-loader',
          options: { sourceMap: true },
        },
      ],
    }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${PATHS.src}/blocks/climating/climating.pug`,
    }),

    new MiniCssExtractPlugin({ filename: '[name].css' }),

    new CopyWebpackPlugin([{
      from: `${PATHS.src}/+(blocks|images)/**/*.+(jpg|png|svg)`,
      to: `${PATHS.dist}/images`,
      flatten: true,
    }]),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};
