import { MigrationInterface, QueryRunner } from "typeorm";

export class Nueva1733705056936 implements MigrationInterface {
    name = 'Nueva1733705056936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "mail" TO "email"`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "nombre" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "detalle"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "detalle" text`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "nombre" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "precio"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "precio" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "image" character varying(250)`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "descripcion" text`);
        await queryRunner.query(`ALTER TABLE "productos" ALTER COLUMN "estado" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productos" ALTER COLUMN "estado" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "descripcion" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "image" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "precio"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "precio" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "productos" ADD "nombre" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "detalle"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "detalle" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "nombre" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "email" TO "mail"`);
    }

}
