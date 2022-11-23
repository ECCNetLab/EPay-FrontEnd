/** @type {import('@jest/types').Config.InitialOptions} */
const jestConfig = {
    preset: 'ts-jest',
    roots: [
        '<rootDir>/src'
    ],
    setupFilesAfterEnv: [
        '<rootDir>/__tests__/setupTests.js',
        '<rootDir>/__tests__/jest.setup.js'
    ],
    testEnvironment: 'node',
    testPathIgnorePatterns: [
        '<rootDir>/.next/',
        '<rootDir>/node_modules/'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$"
    ],
    moduleNameMapper: {
        '\\.(scss)|(css)$': '<rootDir>/node_modules/jest-css-modules',
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    moduleFileExtensions: [
        'ts',
        'tsx'
    ],
    globals: {
        // we must specify a custom tsconfig for tests because we need the typescript transform
        // to transform jsx into js rather than leaving it jsx such as the next build requires. you
        // can see this setting in tsconfig.jest.json -> "jsx": "react"
        'ts-jest': {
            tsconfig: '<rootDir>/__tests__/tsconfig.jest.json',
        },
    },
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    resetMocks: true
}

module.exports = jestConfig
