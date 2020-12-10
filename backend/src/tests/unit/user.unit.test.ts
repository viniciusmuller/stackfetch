import { Connection } from 'typeorm';

import createTypeormConnection from '@database/createTypeormConnection';

let connection: Connection;

describe('User database operations', () => {
  beforeAll(async () => {
    connection = await createTypeormConnection();
  });

  test('Connected', () => {
    expect(connection).toBeDefined();
  });

  test('Create user', () => {});

  test('Read user', () => {});

  test('Edit user', () => {});

  test('Delete user', () => {});
});
