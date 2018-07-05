const path = require('path');

const plugins = require('./plugins');
const Rule = require('./rules');

module.exports = {
  cache: true,
  entry: {
    index: './src/index.js'
  },
  module: {
    rules: [
      Rule.CSS,
      Rule.LESS,
      Rule.FILE,
      Rule.IMG
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.vue',
      '.json']
  },
  plugins: [
    plugins.html,
    plugins.define,
    plugins.progress()
  ]
}