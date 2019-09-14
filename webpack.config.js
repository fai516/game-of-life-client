const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
module.exports = {
  entry: './src/App',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
     '@': path.resolve(__dirname, 'src/'),
     '@component': path.resolve(__dirname, 'src/components'),
     '@style': path.resolve(__dirname, 'src/styles'),
     '@image': path.resolve(__dirname, 'src/images'),
    }
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "",
      minify: true,
      favicon: "src/images/favicon.ico"
    }),
    new HtmlWebpackRootPlugin()
  ]
};
