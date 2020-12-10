import { getConnectionOptions, createConnection } from 'typeorm';

async function createTypeormConnection() {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return createConnection({ ...connectionOptions, name: 'default' });
}

export default createTypeormConnection;
