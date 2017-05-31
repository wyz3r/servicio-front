// @flow
import webpack, {optimize} from 'webpack'

import config from './package.json'

const vendorPkgs = Object.keys(config.dependencies)

module.exports = {
  entry: {
    main: `./src/entry.jsx`,
    vendor: vendorPkgs
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/site`
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
    new optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),
    new optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
