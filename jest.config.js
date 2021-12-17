module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['src', 'node_modules'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.spec.ts$',
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/', '<rootDir>/.git/'],
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json'
    }
  },
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  collectCoverageFrom: ['**/application/**/*.ts']
}
