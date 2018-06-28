/* global __dirname */
const commonPaths = require('./common-paths');

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve =function (pathName) {
  console.log(path.resolve(pathName));
  return path.resolve(pathName);
};

const config = {
  entry: {
    vendor: ['semantic-ui-react']
  },
  resolve: {
    alias: {
      components$: resolve('./src/components/'),
      src$: resolve('./src/'),
    },
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.sass', '.json'],
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`
    })
  ]
};

module.exports = config;
