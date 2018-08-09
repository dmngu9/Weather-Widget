const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                cache: true,
                extractComments: true,
                parallel: true,
                uglifyOptions: {
                    compress: true
                }
            })
        ]
    }
});