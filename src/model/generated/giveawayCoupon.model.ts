import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, StringColumn as StringColumn_, DateTimeColumn as DateTimeColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"

@Index_(["tld", "name", "reservedAt"], {unique: true})
@Entity_()
export class GiveawayCoupon {
    constructor(props?: Partial<GiveawayCoupon>) {
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
    publicCode!: string

    @Index_()
    @DateTimeColumn_({nullable: false})
    reservedAt!: Date

    @Index_()
    @StringColumn_({nullable: true})
    claimedBy!: string | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: true})
    claimedAt!: Date | undefined | null

    @IntColumn_({nullable: true})
    claimDurationInSeconds!: number | undefined | null
}
