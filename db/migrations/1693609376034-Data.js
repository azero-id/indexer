module.exports = class Data1693609376034 {
    name = 'Data1693609376034'

    async up(db) {
        await db.query(`ALTER TABLE "giveaway_coupon" RENAME COLUMN "claim_time" TO "claim_duration_in_seconds"`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "giveaway_coupon" RENAME COLUMN "claim_duration_in_seconds" TO "claim_time"`)
    }
}
