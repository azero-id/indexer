module.exports = class Data1680903216429 {
    name = 'Data1680903216429'

    async up(db) {
        await db.query(`CREATE TABLE "reservation" ("id" character varying NOT NULL, "name" text NOT NULL, "tld" text NOT NULL, "address" text, CONSTRAINT "PK_48b1f9922368359ab88e8bfa525" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "reservation"`)
    }
}
