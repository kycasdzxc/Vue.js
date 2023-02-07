const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development', // production :  배포
  devtool: 'eval', // 개발용. 'hidden-source-map' : 배포
  resolve: {
    extensions: ['.js', '.vue'] // 여기 넣어주면 import에서 확장자 제거 가능
  },
  entry: {
    app: path.join(__dirname, 'main.js')
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  output: {
    filename: '[name].js', // 'app.js'
    path: path.join(__dirname, 'dist')
  }
};