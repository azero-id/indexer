module.exports = class Data1701267749699 {
    name = 'Data1701267749699'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_e49c761d8c3c6d29b99f55c7c1"`)
        await db.query(`ALTER TABLE "received_fee" DROP COLUMN "extrinsic_id"`)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_e49c761d8c3c6d29b99f55c7c1" ON "received_fee" ("extrinsic_id") `)
        await db.query(`ALTER TABLE "received_fee" ADD "extrinsic_id" text NOT NULL`)
    }
}
