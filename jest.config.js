
const paths = require('./config/paths');

module.exports = {
    roots: [paths.clientSrc],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    reporters: [
        'default'
    ],
    setupTestFrameworkScriptFile: paths.enzymeSetup,
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    notify: true,
    testEnvironment: 'node',
    verbose: true
};