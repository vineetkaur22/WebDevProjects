const path = require('path');
module.exports = {
  entry: {
    login: './src/login-client.js',
    chat: './src/chat-client.js',
    services: './src/services.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 5000
}, output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/javascript'),
  },
};