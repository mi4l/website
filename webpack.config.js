import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default () => ({
  entry: ['./www/scripts/index.js', './www/style/base.scss'],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ]
    }]
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: ['.js', '.scss']
  }
});