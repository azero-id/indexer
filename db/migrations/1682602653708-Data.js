module.exports = class Data1682602653708 {
    name = 'Data1682602653708'

    async up(db) {
        await db.query(`CREATE TABLE "public_phase_activated" ("id" character varying NOT NULL, "activated_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_cb0a5f1411df5b95a7db3f3dd29" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d3b1099725bf9ae9412e6cab75" ON "public_phase_activated" ("activated_at") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "public_phase_activated"`)
        await db.query(`DROP INDEX "public"."IDX_d3b1099725bf9ae9412e6cab75"`)
    }
}
