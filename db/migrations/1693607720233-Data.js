module.exports = class Data1693607720233 {
    name = 'Data1693607720233'

    async up(db) {
        await db.query(`CREATE TABLE "giveaway_coupon" ("id" character varying NOT NULL, "tld" text NOT NULL, "name" text NOT NULL, "public_code" text NOT NULL, "reserved_at" TIMESTAMP WITH TIME ZONE NOT NULL, "claimed_by" text, "claimed_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_b73a95298c683899f41372a93a5" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_769df2f364aa35470541db4447" ON "giveaway_coupon" ("name") `)
        await db.query(`CREATE INDEX "IDX_bf40d0613fed445d19480e2e08" ON "giveaway_coupon" ("public_code") `)
        await db.query(`CREATE INDEX "IDX_bc679bfddaaf74ad4aad8029a7" ON "giveaway_coupon" ("reserved_at") `)
        await db.query(`CREATE INDEX "IDX_c2b2f322f633e5e78c4ee72439" ON "giveaway_coupon" ("claimed_by") `)
        await db.query(`CREATE INDEX "IDX_3234c604708ca4edec6799c11e" ON "giveaway_coupon" ("claimed_at") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_4aa83e4bfc7b93760762854ef9" ON "giveaway_coupon" ("tld", "name", "reserved_at") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "giveaway_coupon"`)
        await db.query(`DROP INDEX "public"."IDX_769df2f364aa35470541db4447"`)
        await db.query(`DROP INDEX "public"."IDX_bf40d0613fed445d19480e2e08"`)
        await db.query(`DROP INDEX "public"."IDX_bc679bfddaaf74ad4aad8029a7"`)
        await db.query(`DROP INDEX "public"."IDX_c2b2f322f633e5e78c4ee72439"`)
        await db.query(`DROP INDEX "public"."IDX_3234c604708ca4edec6799c11e"`)
        await db.query(`DROP INDEX "public"."IDX_4aa83e4bfc7b93760762854ef9"`)
    }
}
