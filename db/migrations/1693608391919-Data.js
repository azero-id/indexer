module.exports = class Data1693608391919 {
    name = 'Data1693608391919'

    async up(db) {
        await db.query(`ALTER TABLE "giveaway_coupon" ADD "claim_time" integer`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "giveaway_coupon" DROP COLUMN "claim_time"`)
    }
}
