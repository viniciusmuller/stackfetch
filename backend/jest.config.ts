import { Config } from '@jest/types';

// TODO fix jest path mapping
const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'ts', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: { '.+\\.ts$': 'ts-jest' },
  setupFiles: ['dotenv/config'],
  rootDir: 'src/tests'
};

export default config;
