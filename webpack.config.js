/* eslint strict: 0 */
'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const argv = require('minimist')(process.argv.slice(2));
const isWeb = (argv && argv.target === 'web');
const publicPath = (isWeb ? 'http://localhost:8080/build/' : path.join(__dirname, 'src'));

let options ={
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }],
      }
    ]
  },
  output: {
    path: __dirname + '/build',
    publicPath: publicPath,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      __dirname + '/build',
      'node_modules'
    ],
  },
  entry: [
    './src/index',
  ],
  node: {
    fs: 'empty'
  }
};

options.target = webpackTargetElectronRenderer(options);
module.exports = options;



