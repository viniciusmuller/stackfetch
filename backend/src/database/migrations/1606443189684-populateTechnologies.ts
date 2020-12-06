import { MigrationInterface, QueryRunner } from 'typeorm';

// technologies.json adapted from https://github.com/doda/github-language-colors
import technologiesJSON from '../technologies.json';

export class populateTechnologies1606443189684 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    for(const [tech, color] of Object.entries(technologiesJSON)) {
      await queryRunner
        .manager
        .createQueryBuilder()
        .insert()
        .into('technologies')
        .values({
          name: tech,
          color: color
        })
        .execute()
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner
      .manager
      .createQueryBuilder()
      .delete()
      .from('technologies')
      .execute()

    await queryRunner
      .manager
      // Resetting sqlite autoincrement in order to preserve jointable content
      .query('DELETE FROM sqlite_sequence WHERE name = "technologies"')
    }
}
