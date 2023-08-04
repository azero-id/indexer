import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Index_(["tld", "name", "referredAt"], {unique: true})
@Entity_()
export class Referral {
    constructor(props?: Partial<Referral>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    tld!: string

    @Index_()
    @Column_("text", {nullable: false})
    name!: string

    @Index_()
    @Column_("text", {nullable: false})
    address!: string

    @Index_()
    @Column_("text", {nullable: false})
    referrerName!: string

    @Index_()
    @Column_("text", {nullable: false})
    referrerAddress!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    referralAmount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    receivedFeeAmount!: bigint

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    referredAt!: Date
}
