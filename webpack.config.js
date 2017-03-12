  var webpack = require('webpack');

  module.exports = {
    devtool: 'source-map',
    entry: [
      'webpack-dev-server/client?http://localhost:8088',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ],
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }]
    },
    resolve: {
      extensions: ['', '.js']
    },
    devServer: {
      contentBase: './dist',
      hot: true,
      historyApiFallback: true
    },
    plugins: [
      new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      })
    ]
  };
