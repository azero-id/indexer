module.exports = class Data1697527991677 {
    name = 'Data1697527991677'

    async up(db) {
        await db.query(`CREATE TABLE "received_fee" ("id" character varying NOT NULL, "tld" text NOT NULL, "name" text NOT NULL, "from" text NOT NULL, "event_type" text NOT NULL, "received_at" TIMESTAMP WITH TIME ZONE NOT NULL, "received_amount" numeric NOT NULL, "received_amount_eur" numeric NOT NULL, "registration_duration_in_years" integer NOT NULL, CONSTRAINT "PK_75fa7cead141f6ccb9be0cd9a5f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_8a8a3c1184b11591a1c13fc046" ON "received_fee" ("name") `)
        await db.query(`CREATE INDEX "IDX_5d9f3fc91497a08b12d4a91897" ON "received_fee" ("from") `)
        await db.query(`CREATE INDEX "IDX_18f50c09f4a984cf8d26bb06f2" ON "received_fee" ("event_type") `)
        await db.query(`CREATE INDEX "IDX_b316087ca3b544e1cca89d60c9" ON "received_fee" ("received_at") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_4a1de51a90e2fef44b0cfbe3f7" ON "received_fee" ("tld", "name", "event_type", "received_at") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "received_fee"`)
        await db.query(`DROP INDEX "public"."IDX_8a8a3c1184b11591a1c13fc046"`)
        await db.query(`DROP INDEX "public"."IDX_5d9f3fc91497a08b12d4a91897"`)
        await db.query(`DROP INDEX "public"."IDX_18f50c09f4a984cf8d26bb06f2"`)
        await db.query(`DROP INDEX "public"."IDX_b316087ca3b544e1cca89d60c9"`)
        await db.query(`DROP INDEX "public"."IDX_4a1de51a90e2fef44b0cfbe3f7"`)
    }
}
