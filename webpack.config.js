const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    // mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    // watch: true,

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                      loader: 'style-loader'
                    },
                    {
                      loader: 'css-loader'
                    }
                  ],
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      })
    ]
}