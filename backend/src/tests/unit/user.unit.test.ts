import { Connection, Repository } from 'typeorm';

import { helperUser } from '@tests/helpers';
import createTypeormConnection from '@database/createTypeormConnection';
import User from '@models/user';

let connection: Connection;
let repository: Repository<User>;

describe('User database operations', () => {
  beforeAll(async () => {
    connection = await createTypeormConnection();
    repository = connection.getRepository(User);
  });

  afterAll(async () => {
    await connection.close();
  });

  test('Connect', () => {
    expect(connection).toBeDefined();
    expect(repository).toBeDefined();
  });

  test('Create and saves a user', async () => {
    const user = repository.create(helperUser);
    await repository.save(user);
  });

  test('Read user', async () => {
    const user = await repository.findOne(1);
    expect(user).toBeDefined();
  });

  test('Update user', async () => {
    const user = await repository.findOneOrFail(1);
    expect(user).toBeDefined();
    user.name = 'Not John Smith';
    await repository.save(user);
  });

  test('Delete user', async () => {
    const user = await repository.findOneOrFail(1);
    expect(user).toBeDefined();
    await repository.remove(user);
    expect(await repository.findOne(1)).toBeUndefined();
  });
});
