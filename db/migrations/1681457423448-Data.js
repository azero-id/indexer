module.exports = class Data1681457423448 {
    name = 'Data1681457423448'

    async up(db) {
        await db.query(`CREATE TABLE "owner" ("id" character varying NOT NULL, CONSTRAINT "PK_8e86b6b9f94aece7d12d465dc0c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "domain" ("id" character varying NOT NULL, "name" text NOT NULL, "tld" text NOT NULL, "registered_at" TIMESTAMP WITH TIME ZONE NOT NULL, "owner_id" character varying, CONSTRAINT "PK_27e3ec3ea0ae02c8c5bceab3ba9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_17c37b0f9b2f746b066eb51484" ON "domain" ("tld") `)
        await db.query(`CREATE INDEX "IDX_4e21006496ef49995f4cf5ff8c" ON "domain" ("owner_id") `)
        await db.query(`CREATE INDEX "IDX_0ff1c40a256020d3f014e1bde4" ON "domain" ("registered_at") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_761b9389f224473cf39461ea77" ON "domain" ("name", "tld") `)
        await db.query(`CREATE TABLE "reservation" ("id" character varying NOT NULL, "name" text NOT NULL, "tld" text NOT NULL, "address" text, "reserved_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_48b1f9922368359ab88e8bfa525" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_4c84f7b5de38336b7f18063ebf" ON "reservation" ("tld") `)
        await db.query(`CREATE INDEX "IDX_be855acbdb7b9948e3d60410cb" ON "reservation" ("address") `)
        await db.query(`CREATE INDEX "IDX_485e25a3b41f54bdc12225dc5a" ON "reservation" ("reserved_at") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_8db2acd5da3fa5541d1b66f7b9" ON "reservation" ("name", "tld") `)
        await db.query(`ALTER TABLE "domain" ADD CONSTRAINT "FK_4e21006496ef49995f4cf5ff8c4" FOREIGN KEY ("owner_id") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "owner"`)
        await db.query(`DROP TABLE "domain"`)
        await db.query(`DROP INDEX "public"."IDX_17c37b0f9b2f746b066eb51484"`)
        await db.query(`DROP INDEX "public"."IDX_4e21006496ef49995f4cf5ff8c"`)
        await db.query(`DROP INDEX "public"."IDX_0ff1c40a256020d3f014e1bde4"`)
        await db.query(`DROP INDEX "public"."IDX_761b9389f224473cf39461ea77"`)
        await db.query(`DROP TABLE "reservation"`)
        await db.query(`DROP INDEX "public"."IDX_4c84f7b5de38336b7f18063ebf"`)
        await db.query(`DROP INDEX "public"."IDX_be855acbdb7b9948e3d60410cb"`)
        await db.query(`DROP INDEX "public"."IDX_485e25a3b41f54bdc12225dc5a"`)
        await db.query(`DROP INDEX "public"."IDX_8db2acd5da3fa5541d1b66f7b9"`)
        await db.query(`ALTER TABLE "domain" DROP CONSTRAINT "FK_4e21006496ef49995f4cf5ff8c4"`)
    }
}
