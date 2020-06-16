const path = require('path');
const SRC_DIR = path.resolve(__dirname, 'Client/src');
const DIST_DIR = path.resolve(__dirname, 'Client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: `${DIST_DIR}`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
}