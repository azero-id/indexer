module.exports = class Data1691164185864 {
    name = 'Data1691164185864'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_17c37b0f9b2f746b066eb51484"`)
        await db.query(`DROP INDEX "public"."IDX_4c84f7b5de38336b7f18063ebf"`)
        await db.query(`CREATE TABLE "referral" ("id" character varying NOT NULL, "tld" text NOT NULL, "name" text NOT NULL, "address" text NOT NULL, "referrer_name" text NOT NULL, "referrer_address" text NOT NULL, "referral_amount" numeric NOT NULL, "received_fee_amount" numeric NOT NULL, "referred_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_a2d3e935a6591168066defec5ad" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d7850a2f416781906b36e09707" ON "referral" ("name") `)
        await db.query(`CREATE INDEX "IDX_419831e9441e429f6a4ec5acd6" ON "referral" ("address") `)
        await db.query(`CREATE INDEX "IDX_955a8260e26ebfa023df846b6f" ON "referral" ("referrer_name") `)
        await db.query(`CREATE INDEX "IDX_4d07a0e7437e1394a8e97ee6c1" ON "referral" ("referrer_address") `)
        await db.query(`CREATE INDEX "IDX_fa92a6bd68db3e06d48d7dac81" ON "referral" ("referred_at") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_9caa9f6131b005224eea997fb8" ON "referral" ("tld", "name", "referred_at") `)
        await db.query(`CREATE INDEX "IDX_26a07113f90df161f919c7d5a6" ON "domain" ("name") `)
        await db.query(`CREATE INDEX "IDX_795bd3539bf0e28a6ee8f3e5e6" ON "reservation" ("name") `)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_17c37b0f9b2f746b066eb51484" ON "domain" ("tld") `)
        await db.query(`CREATE INDEX "IDX_4c84f7b5de38336b7f18063ebf" ON "reservation" ("tld") `)
        await db.query(`DROP TABLE "referral"`)
        await db.query(`DROP INDEX "public"."IDX_d7850a2f416781906b36e09707"`)
        await db.query(`DROP INDEX "public"."IDX_419831e9441e429f6a4ec5acd6"`)
        await db.query(`DROP INDEX "public"."IDX_955a8260e26ebfa023df846b6f"`)
        await db.query(`DROP INDEX "public"."IDX_4d07a0e7437e1394a8e97ee6c1"`)
        await db.query(`DROP INDEX "public"."IDX_fa92a6bd68db3e06d48d7dac81"`)
        await db.query(`DROP INDEX "public"."IDX_9caa9f6131b005224eea997fb8"`)
        await db.query(`DROP INDEX "public"."IDX_26a07113f90df161f919c7d5a6"`)
        await db.query(`DROP INDEX "public"."IDX_795bd3539bf0e28a6ee8f3e5e6"`)
    }
}
