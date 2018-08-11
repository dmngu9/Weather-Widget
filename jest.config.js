
const paths = require('./config/paths');

module.exports = {
    roots: [paths.clientSrc],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    setupTestFrameworkScriptFile: paths.enzymeSetup,
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
    moduleDirectories: ['node_modules', paths.clientSrc],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    notify: true,
    testEnvironment: 'jsdom',
    testURL: 'http://localhost/',
    verbose: true
};