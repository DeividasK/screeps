module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  setupTestFrameworkScriptFile: '<rootDir>/internals/tests/setup.js',
  transform: {
    '.*': '<rootDir>/node_modules/babel-jest',
  },
  coveragePathIgnorePatterns: ['internals'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
