import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsersTable1606416201131 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar',
          length: '30'
        },
        {
          name: 'age',
          type: 'integer'
        },
        {
          name: 'about',
          type: 'text',
          length: '300'
        },
        {
          name: 'gitHubUsername',
          type: 'varchar',
          length: '39',
          isUnique: true
        }
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
