const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$";

module.exports = {
    preset: 'js-jest',  // use ts-jest if using typescript
    testEnvironment: 'node',
    transformIgnorePatterns: ['^.+\\.js$'],
}
