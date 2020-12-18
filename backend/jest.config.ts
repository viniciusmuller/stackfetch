import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleNameMapper: {
    'controllers/(.*)': '<rootDir>/src/controllers/$1',
    'database/(.*)': '<rootDir>/src/database/$1',
    'models/(.*)': '<rootDir>/src/models/$1',
    'errors/(.*)': '<rootDir>/src/errors/$1',
    'views/(.*)': '<rootDir>/src/views/$1',
    'validation/(.*)': '<rootDir>/src/validation/$1',
    'services/(.*)': '<rootDir>/src/services/$1',
    'config/(.*)': '<rootDir>/src/config/$1',
    'routes/(.*)': '<rootDir>/src/routes/$1',
    'tests/(.*)': '<rootDir>/src/tests/$1',
    '~/(.*)': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['js', 'ts'],
  transform: { '\\.ts$': 'ts-jest' },
  setupFiles: ['dotenv/config']
};

export default config;
