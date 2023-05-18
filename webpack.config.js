const path = require('path');

module.exports = {
  entry: './src/index.js', // specify the entry point of your JavaScript code
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-nested-ancestors'),
                require('postcss-nested')
              ]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
          options: {
            removeSVGTagAttrs: false
          }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    library: 'ImageTool',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
};
