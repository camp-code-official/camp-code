const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/Main.tsx'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // TypeScript / TSX rules
      {
        test: /\.tsx?$/,
        include: path.join(__dirname, '../src'),
        loader: 'ts-loader'
      },
      // CSS rules
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Add these loaders to handle CSS files
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          filename: '[name].bundle.js'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      gameName: 'Camp Code', // Assuming you use this property somewhere, otherwise it can be removed
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
        { from: 'src/favicon.ico', to: '' }
      ]
    })
  ]
};
