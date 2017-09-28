const ExtractTextPlugin = require("extract-text-webpack-plugin");
require("babel-polyfill");

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './src/app/Index.jsx'],
  output: {
    path: __dirname + '/',
    filename: 'dist/js/out.js'
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3001
  },
  watch: true,
  module: {
    loaders: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
          outputPath: 'dist/img/',
          publicPath: '../../'
        }
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("./dist/css/styles.css")
  ]
};
