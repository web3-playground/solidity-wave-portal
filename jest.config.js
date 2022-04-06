module.exports = {
  name: 'my-wave-portal',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/?(*.)+(spec|test).ts'],
  transform: { '^.+\\.ts$': 'ts-jest' },
  globals: {
    tsconfig: {
      tsConfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
};
