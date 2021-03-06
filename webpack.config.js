const path = require('path');
module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    global: './src/js/global.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/src/assets/js',
    sourceMapFilename: "[name].js.map",
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: '../css/', name: '[name].css' }
          },
          'sass-loader'
        ]
      }
    ]
  },
}
