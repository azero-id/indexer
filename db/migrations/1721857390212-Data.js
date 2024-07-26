module.exports = class Data1721857390212 {
    name = 'Data1721857390212'

    async up(db) {
        await db.query(`ALTER TABLE "domain" ADD "expires_at" TIMESTAMP WITH TIME ZONE`)
        await db.query(`CREATE INDEX "IDX_061aacdd24d0d6e3f15f0d3173" ON "domain" ("expires_at") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "domain" DROP COLUMN "expires_at"`)
        await db.query(`DROP INDEX "public"."IDX_061aacdd24d0d6e3f15f0d3173"`)
    }
}
