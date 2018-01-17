var webpack = require('webpack');
var path = require('path');

var buildDir = path.resolve(__dirname, 'public');
var appDir = path.resolve(__dirname, 'app');

var config = {
  entry: appDir + '/index.jsx',
  output: {
    path: buildDir,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : appDir,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;