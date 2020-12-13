import { Connection, Repository } from 'typeorm';

import createTypeormConnection from '@database/createTypeormConnection';
import { phUser, phTech } from '@tests/placeholders';
import Technology from '@models/technology';
import User from '@models/user';

let connection: Connection;
let tRepository: Repository<Technology>;
let uRepository: Repository<User>;

describe('User and technology models integration', () => {
  beforeAll(async () => {
    connection = await createTypeormConnection();
    tRepository = connection.getRepository(Technology);
    uRepository = connection.getRepository(User);
  });

  afterAll(async () => {
    await connection.close();
  });

  test('Connect', () => {
    expect(connection).toBeDefined();
    expect(tRepository).toBeDefined();
    expect(uRepository).toBeDefined();
  });

  test('Create a user with technologies', async () => {
    const user = uRepository.create(phUser);
    const techs = tRepository.create(Array(5).fill(phTech));
    user.technologies = techs;
    await uRepository.save(user);
  });

  test('Read a user with technologies', async () => {
    const user = await uRepository.findOneOrFail(1);
    expect(user).toBeDefined();
    expect(user.technologies.length).toBe(5);
    const { name, color } = user.technologies[0];
    expect({ name, color }).toStrictEqual(phTech);
  });

  test('Update a user technology', async () => {
    const user = await uRepository.findOneOrFail(1);
    user.technologies[0].name = 'Python';
    expect(await uRepository.save(user)).toBe(user);
  });

  test('Delete a user technology', async () => {
    const user = await uRepository.findOneOrFail(1);
    user.technologies.splice(0, 1);
    expect((await uRepository.save(user)).technologies.length).toBe(4);
  });
});
