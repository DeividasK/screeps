const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// console.log('path', path.resolve('src/'));

module.exports = {
  entry: './src/main.js',
  resolve: {
    modules: [
      path.resolve('src')
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.resolve() }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve('dist')
  }
};
