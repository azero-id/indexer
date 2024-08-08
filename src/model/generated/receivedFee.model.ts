import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_, FloatColumn as FloatColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class ReceivedFee {
    constructor(props?: Partial<ReceivedFee>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    blockHash!: string

    @Index_()
    @StringColumn_({nullable: false})
    tld!: string

    @Index_()
    @StringColumn_({nullable: false})
    name!: string

    @Index_()
    @StringColumn_({nullable: false})
    from!: string

    @Index_()
    @StringColumn_({nullable: false})
    eventType!: string

    @Index_()
    @DateTimeColumn_({nullable: false})
    receivedAt!: Date

    @BigIntColumn_({nullable: false})
    receivedAmount!: bigint

    @FloatColumn_({nullable: false})
    receivedAmountEUR!: number

    @IntColumn_({nullable: false})
    registrationDurationInYears!: number
}
