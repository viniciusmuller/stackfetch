import { Connection, Repository } from 'typeorm';

import { phTech } from '@tests/placeholders';
import createTypeormConnection from '@database/createTypeormConnection';
import Technology from '@models/technology';

let connection: Connection;
let repository: Repository<Technology>;

describe('User database operations', () => {
  beforeAll(async () => {
    connection = await createTypeormConnection();
    repository = connection.getRepository(Technology);
  });

  afterAll(async () => {
    await connection.close();
  });

  test('Connect', () => {
    expect(connection).toBeDefined();
    expect(repository).toBeDefined();
  });

  test('Create and saves a technology', async () => {
    const user = repository.create(phTech);
    await repository.save(user);
  });

  test('Read technology', async () => {
    expect(await repository.findOne(1)).toBeDefined();
  });

  test('Update technology', async () => {
    const tech = await repository.findOneOrFail(1);
    expect(tech).toBeDefined();
    tech.name = 'Ruby';
    await repository.save(tech);
  });

  test('Delete technology', async () => {
    const tech = await repository.findOneOrFail(1);
    expect(tech).toBeDefined();
    await repository.remove(tech);
    expect(await repository.findOne(1)).toBeUndefined();
  });
});
