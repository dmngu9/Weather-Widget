const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const paths = require('../config/paths');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TsconfigPathsPlugin({ configFile: paths.clientTsConfig })
        ],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: paths.clientSrc,
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                        options: {
                            transpileOnly: true,
                            configFile: paths.clientTsConfig
                        },
                    },
                ],
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000
                },
            }
        ]
    },
    plugins: [
        new Dotenv()
    ]
};