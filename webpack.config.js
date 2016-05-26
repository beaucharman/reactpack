var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

module.exports = {
  entry: './app/entry.jsx',
  output: {
    path: './static/',
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true,
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=[path][name]---[local]---[hash:base64:5]!stylus-loader'),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?name=assets/images/[name].[ext]?[hash]&limit=8192',
      },
    ]
  },
  stylus: {
    use: [
      require('nib')(),
      require('rupture')(),
    ],
    import: [
      '~nib/lib/nib/index.styl',
      '~rupture/rupture/index.styl',
      path.join(path.join(__dirname, 'app') + '/variables.styl'),
    ],
  },
}
