// @flow

import {optimize} from 'webpack'

import config from './package.json'

const vendorPkgs = Object.keys(config.dependencies)

module.exports = {
  entry: {
    main: ['./build/browserSync.js', './src/entry.jsx'],
    vendor: vendorPkgs
  },
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader'] },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ]
}
