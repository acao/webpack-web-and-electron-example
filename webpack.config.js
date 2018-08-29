/* eslint strict: 0 */
'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const [,,command, value] = process.argv;
const srcPath = path.join(__dirname, 'src');
const isWeb = (process.env.APP_TARGET &&  process.env.APP_TARGET === 'WEB');
const outputPath = path.join(__dirname, 'build', isWeb ? 'web' : 'electron');
const indexPath = path.join(outputPath, isWeb ? 'index.html' : 'index-electron.html');

console.log({ outputPath, indexPath, isWeb })

let options = {
  mode: process.env.NODE_ENV,
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          // plugins: [require('@babel/plugin-proposal-object-rest-spread')]
        }
      },
      exclude: [ /node_modules/, isWeb ? /^(.*\.(?!(electron.js)$))?[^.]*$/i : /^(.*\.(?!(web.js)$))?[^.]*$/i ],
    }]
  },
  devServer: {
    contentBase: outputPath,
  },
  output: {
    path: outputPath,
    filename: 'bundle.js',
  },
  entry: './src/index',
  plugins: [new HtmlWebpackPlugin({ 
    title: `My ${isWeb ? 'Web' : 'Electron'} App`,
    template: path.join(srcPath, 'index.html'),
    filename: indexPath,
  })]
};

options.target = isWeb ? 'web' : 'electron-renderer' 

module.exports = options;
