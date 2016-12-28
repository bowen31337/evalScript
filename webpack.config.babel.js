import {join} from 'path'

const include = join(__dirname, 'src')

export default {
  entry: './src',
  output: {
    path: join(__dirname, 'lib'),
    libraryTarget: 'umd',
    library: 'evalScript',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include}
    ]
  }
}