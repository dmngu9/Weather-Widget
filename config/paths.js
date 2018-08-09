const path = require('path');
const fs = require('fs');

const appDir = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDir, relativePath);

module.exports = {
    clientBuild: resolveApp('build'),
    clientHtml: resolveApp('src/index.html'),
    clientIndex: resolveApp('src/index.tsx'),
    clientSrc: resolveApp('src'),
    nodeModules: resolveApp('node_modules'),
    enzymeSetup: resolveApp('config/enzyme-setup.js'),
    clientTsConfig: resolveApp('tsconfig.json'),
    clientTsLint: resolveApp('tslint.json')
};