const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      root: path.resolve(__dirname, './'),
      src: path.resolve(__dirname, 'src/'),
      actions: path.resolve(__dirname, 'src/actions/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      images: path.resolve(__dirname, 'src/images/'),
      config: path.resolve(__dirname, 'src/config.js'),
      api: path.resolve(__dirname, 'src/api/'),
    },
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
          emitWarning: true,
          failOnWarning: true,
          failOnError: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: '.', to: './dist/index.html' }],
    },
    compress: true,
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: './src/images/favicon.ico',
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
