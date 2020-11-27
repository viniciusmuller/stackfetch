import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserTechnologyManyToManyTable1606420896485 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users_technologies_technologies',
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
          name: 'usersId',
          type: 'integer',
          unsigned: true,
        },
        {
          name: 'technologiesId',
          type: 'integer',
          unsigned: true,
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_technologies_technologies')
  }
}
