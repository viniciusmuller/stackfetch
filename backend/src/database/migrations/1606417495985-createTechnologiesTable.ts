import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTechnologiesTable1606417495985 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'technologies',
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
          length: '20',
          isUnique: true
        },
        {
          name: 'color',
          type: 'varchar',
          length: '7'
        }
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('technologies');
  }
}
