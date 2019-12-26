const path = require('path');
module.exports = {
  entry: './src/homepage.js',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 5000
}, output: {
    filename: 'homepage.js',
    path: path.resolve(__dirname, 'public/javascript'),
  },
};