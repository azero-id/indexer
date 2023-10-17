import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Index_(["tld", "name", "eventType", "receivedAt"], {unique: true})
@Entity_()
export class ReceivedFee {
    constructor(props?: Partial<ReceivedFee>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    blockHash!: string

    @Index_()
    @Column_("text", {nullable: false})
    extrinsicId!: string

    @Column_("text", {nullable: false})
    tld!: string

    @Index_()
    @Column_("text", {nullable: false})
    name!: string

    @Index_()
    @Column_("text", {nullable: false})
    from!: string

    @Index_()
    @Column_("text", {nullable: false})
    eventType!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    receivedAt!: Date

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    receivedAmount!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    receivedAmountEUR!: number

    @Column_("int4", {nullable: false})
    registrationDurationInYears!: number
}
