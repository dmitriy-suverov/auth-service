import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserTable1588537561061 implements MigrationInterface {
    name = 'CreateUserTable1588537561061'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" bigint NOT NULL, "updatedAt" bigint, "deletedAt" bigint, "login" character varying NOT NULL, "email" character varying NOT NULL, "passwordHash" character varying NOT NULL, "isConfirmed" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_a62473490b3e4578fd683235c5e" UNIQUE ("login"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
