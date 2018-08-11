if (typeof process.env.NODE_ENV === 'undefined') {
    throw new Error(`You have not provided an environment variable for NODE_ENV`);
}

const webpackEnvConfig =
    process.env.NODE_ENV === 'production'
        ? require('./config/webpack.config.prod')
        : require('./config/webpack.config.dev');

module.exports = webpackEnvConfig;