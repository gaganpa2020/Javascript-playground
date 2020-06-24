const path = require('path');

module.exports = {
  entry: './lib/components/Index.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
};
