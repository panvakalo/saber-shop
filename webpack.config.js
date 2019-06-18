module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader?name=img/[name].[ext]?[hash]'
      }
    ]
  }
}
