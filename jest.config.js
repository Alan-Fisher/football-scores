/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>/src/'],
  testMatch: ['<rootDir>/src/**/*.test.ts?(x)'],
  setupFiles: ['<rootDir>/jest/jestSetup.ts'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  coveragePathIgnorePatterns: ['<rootDir>/jest/'],
  ci: true,
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './artifacts' }],
  ],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
  },
  watchAll: false,
}
