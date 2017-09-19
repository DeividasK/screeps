const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// console.log('path', path.resolve('src/'));

module.exports = {
  entry: './src/main.js',
  target: 'node',
  devtool: 'source-map',
  resolve: {
    modules: [
      path.resolve('src')
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['flow', 'env']
          }
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.resolve() }),
  ],
  output: {
    filename: 'main.js',
    libraryTarget: 'commonjs2',
    path: path.resolve('dist')
  }
};
