module.exports = [
  {
    name: 'development',
    type: 'postgres',
    host: process.env.DATABASE_URL,
    port: process.env.PG_PORT,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,

    synchronize: true,
    entities: ['./src/models/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
      migrationsDir: './src/database/migrations'
    }
  },
  {
    name: 'test',
    type: 'postgres',
    host: process.env.DATABASE_URL,
    port: process.env.PG_PORT,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: 'tests',

    synchronize: true,
    dropSchema: true,
    entities: ['./src/models/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
      migrationsDir: './src/database/migrations'
    }
  },
  {
    name: 'production',
    type: 'postgres',
    host: process.env.DATABASE_URL,
    port: process.env.PG_PORT,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,

    synchronize: false,
    runMigrations: true,
    entities: ['./dist/src/models/*.js'],
    migrations: ['./dist/src/database/migrations/*.js'],
    cli: {
      migrationsDir: './dist/src/database/migrations'
    }
  }
];
