const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    //   Arquivo para onde a conversão irá
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx']
  },
  devServer: {
    liveReload: true
  },
  plugins: [
    //   Injeta a tag script automaticamente no index.html
    new HTMLWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        // Verifica se a importação é um arquivo js
        test: /\.jsx$/,
        // Não compila arquivos de dentro do node_modules
        exclude: /node_modules/,
        // Faz compilação de tudo em um só arquivo
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
