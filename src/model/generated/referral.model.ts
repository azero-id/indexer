import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Index_(["tld", "name", "referredAt"], {unique: true})
@Entity_()
export class Referral {
    constructor(props?: Partial<Referral>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    tld!: string

    @Index_()
    @StringColumn_({nullable: false})
    name!: string

    @Index_()
    @StringColumn_({nullable: false})
    address!: string

    @Index_()
    @StringColumn_({nullable: false})
    referrerName!: string

    @Index_()
    @StringColumn_({nullable: false})
    referrerAddress!: string

    @BigIntColumn_({nullable: false})
    referralAmount!: bigint

    @BigIntColumn_({nullable: false})
    receivedFeeAmount!: bigint

    @Index_()
    @DateTimeColumn_({nullable: false})
    referredAt!: Date
}
