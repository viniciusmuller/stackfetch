export default {
  type: 'postgres',
  host: process.env.DATABASE_URL,
  port: process.env.PG_PORT,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,

  synchronize: false,
  entities: [
    './src/models/*.ts'
  ],
  migrations: [
    './src/database/migrations/*.ts'
  ],
  cli: {
    migrationsDir: './src/database/migrations'
  }
}
