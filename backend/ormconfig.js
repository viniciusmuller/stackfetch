module.exports = [
  {
    name: 'development',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: 'stackfetch__dev',

    runMigrations: true,
    entities: ['./src/models/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
      migrationsDir: './src/database/migrations'
    }
  },
  {
    name: 'test',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: 'stackfetch__tests',

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
    // Since heroku is not being used for deployment anymore, just use the
    // local postgres database for POC
    //url: process.env.DATABASE_URL,
    port: 5432,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: 'stackfetch__prod',

    synchronize: false,
    entities: ['./dist/src/models/*.js'],
    migrations: ['./dist/src/database/migrations/*.js'],
    cli: {
      migrationsDir: './dist/src/database/migrations'
    }
  }
];
