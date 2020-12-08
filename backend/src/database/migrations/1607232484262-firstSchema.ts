import { MigrationInterface, QueryRunner } from 'typeorm';

export class firstSchema1607232484262 implements MigrationInterface {
    name = 'firstSchema1607232484262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "age" integer NOT NULL, "about" varchar NOT NULL, "github_username" varchar NOT NULL, "registered_at" varchar NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
        await queryRunner.query(`CREATE TABLE "technologies" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "color" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "users_technologies_technologies" ("usersId" integer NOT NULL, "technologiesId" integer NOT NULL, PRIMARY KEY ("usersId", "technologiesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4b183e88b3aae55a5fe57087c8" ON "users_technologies_technologies" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a240ffc539cbea3857c1f147b3" ON "users_technologies_technologies" ("technologiesId") `);
        await queryRunner.query(`DROP INDEX "IDX_4b183e88b3aae55a5fe57087c8"`);
        await queryRunner.query(`DROP INDEX "IDX_a240ffc539cbea3857c1f147b3"`);
        await queryRunner.query(`CREATE TABLE "temporary_users_technologies_technologies" ("usersId" integer NOT NULL, "technologiesId" integer NOT NULL, CONSTRAINT "FK_4b183e88b3aae55a5fe57087c8e" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a240ffc539cbea3857c1f147b34" FOREIGN KEY ("technologiesId") REFERENCES "technologies" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("usersId", "technologiesId"))`);
        await queryRunner.query(`INSERT INTO "temporary_users_technologies_technologies"("usersId", "technologiesId") SELECT "usersId", "technologiesId" FROM "users_technologies_technologies"`);
        await queryRunner.query(`DROP TABLE "users_technologies_technologies"`);
        await queryRunner.query(`ALTER TABLE "temporary_users_technologies_technologies" RENAME TO "users_technologies_technologies"`);
        await queryRunner.query(`CREATE INDEX "IDX_4b183e88b3aae55a5fe57087c8" ON "users_technologies_technologies" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a240ffc539cbea3857c1f147b3" ON "users_technologies_technologies" ("technologiesId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_a240ffc539cbea3857c1f147b3"`);
        await queryRunner.query(`DROP INDEX "IDX_4b183e88b3aae55a5fe57087c8"`);
        await queryRunner.query(`ALTER TABLE "users_technologies_technologies" RENAME TO "temporary_users_technologies_technologies"`);
        await queryRunner.query(`CREATE TABLE "users_technologies_technologies" ("usersId" integer NOT NULL, "technologiesId" integer NOT NULL, PRIMARY KEY ("usersId", "technologiesId"))`);
        await queryRunner.query(`INSERT INTO "users_technologies_technologies"("usersId", "technologiesId") SELECT "usersId", "technologiesId" FROM "temporary_users_technologies_technologies"`);
        await queryRunner.query(`DROP TABLE "temporary_users_technologies_technologies"`);
        await queryRunner.query(`CREATE INDEX "IDX_a240ffc539cbea3857c1f147b3" ON "users_technologies_technologies" ("technologiesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4b183e88b3aae55a5fe57087c8" ON "users_technologies_technologies" ("usersId") `);
        await queryRunner.query(`DROP INDEX "IDX_a240ffc539cbea3857c1f147b3"`);
        await queryRunner.query(`DROP INDEX "IDX_4b183e88b3aae55a5fe57087c8"`);
        await queryRunner.query(`DROP TABLE "users_technologies_technologies"`);
        await queryRunner.query(`DROP TABLE "technologies"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
