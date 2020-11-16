/*eslint-disable */

const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  devServer: {
    port: 8080,
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'public'),
  },
  output: {
    filename: 'bundle.min.js',
    publicPath: 'dist/',
    path: path.resolve(__dirname, 'public/dist'),
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: [/\.scss$/, /\.css$/],
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'imgs/',
          },
        },
      },
      {
        test: /\.(woff(2)?|otf|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
};
