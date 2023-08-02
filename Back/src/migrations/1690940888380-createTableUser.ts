import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1690940888380 implements MigrationInterface {
    name = 'CreateTableUser1690940888380'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "full_name" character varying(245) NOT NULL, "email" character varying(245) NOT NULL, "password" character varying(245) NOT NULL, "phone" character varying(45) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_0adc0a8834ea0f252e96d154de9" UNIQUE ("full_name"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
