const webpackValidator = require('webpack-validator')

const { join } = require('path')

module.exports  = () => webpackValidator( {
  entry: './src',
  output: {
    path: join(__dirname, 'lib'),
    libraryTarget: 'umd',
    library: 'evalScript',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
    ]
  }
})
