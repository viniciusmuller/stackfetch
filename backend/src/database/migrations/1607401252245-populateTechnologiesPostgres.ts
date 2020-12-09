import { MigrationInterface, QueryRunner } from 'typeorm';

// technologies.json adapted from https://github.com/doda/github-language-colors
import technologiesJSON from '../technologies.json';

export class populateTechnologiesPostgres1607401252245 implements MigrationInterface {

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
        // Wiping table content and restarting their indexes
        .query('TRUNCATE TABLE technologies RESTART IDENTITY')
    }
}
