CopyPlugin = require('copy-webpack-plugin')
UglifyJSPlugin = require('uglifyjs-webpack-plugin')
path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        enforce: 'pre',
        exclude: '/node_modules/',
        loader: 'eslint-loader'
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: './src/index.html' }
    ]),
    new UglifyJSPlugin({
      test: /.js$/,
      exclude: /node_modules/,
      mangle: false
    })
  ],
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 8000,
    historyApiFallback: true
  }
}