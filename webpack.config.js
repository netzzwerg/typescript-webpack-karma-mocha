var webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  resolve: {
    // Add '.ts' as resolvable extensions.
    extensions: ['.ts', '.js'],
    modules: ['./src', './src/helper', 'node_modules']
  },

  // A SourceMap is added as a DataUrl to the bundle.
  devtool: '#inline-source-map',

  module: {
    rules: [
      // All files with a '.ts' extension will be handled by 'ts-loader'.
      { 
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}