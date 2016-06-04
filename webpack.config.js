var webpack = require('webpack')

// Default configs for developemnt
var config = {
  entry: './public/javascripts/entry.js',
  output: {
    path: './public/dist/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ]
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: JSON.parse(require('fs').readFileSync('./.babelrc'))
      }
    ]
  }
}

// Override some configs for production
if (process.env.NODE_ENV === 'production') {
  // Add hash to file name
  config.output.filename = 'bundle.[hash].js'

  // Uglify
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
}

module.exports = config
