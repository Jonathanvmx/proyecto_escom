const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/Aplicacion.jsx",
    output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true
    },
    resolve: {
    extensions: ['.js', '.jsx']
    },   
    plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Ruta plantilla HTML
      filename: 'index.html', // Nombre del archivo de salida
    })
  ],    
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }          
        ]
      },    
    devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    port: 8080, // Puerto del servidor
    open: true, // Abrir navegador automáticamente
    hot: true, // Habilitar Hot Module Replacement (HMR)
    historyApiFallback: true, // Aplicaciones SPA
  }
}
