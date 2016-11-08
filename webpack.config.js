var path = require('path');
var webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      './src/main.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname,'public'),
    publicPath :'/public/'
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders :[
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'react-hot!babel'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!sass'
      }
    ]
  }
}
