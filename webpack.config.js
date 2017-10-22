const path = require('path');

module.exports = {
  // Don't attempt to continue if there are any errors.
  bail: true,
  devtool: 'cheap-module-source-map',
  context: __dirname,
  entry: './app/index.tsx',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css']
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loader: 'tslint-loader'
    }, {
      test: /\.tsx?$/,
      loader: [
        'babel-loader',
        'awesome-typescript-loader'
      ],
      exclude: /node_modules/
    }]
  }
};
