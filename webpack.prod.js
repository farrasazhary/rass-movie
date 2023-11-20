const {merge} = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',

              options: {
                presets: ['@babel/preset-env']
              }
            }
          ]
        }
      ]
    }
  });