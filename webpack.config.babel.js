import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default () => ({
  entry: [
    path.join(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.css'],
    modules: ['node_modules', 'src', 'scripts', 'components'],
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
                'react',
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|styl)$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
    ],
  },
})
