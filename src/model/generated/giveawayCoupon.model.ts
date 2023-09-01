import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Index_(["tld", "name", "reservedAt"], {unique: true})
@Entity_()
export class GiveawayCoupon {
    constructor(props?: Partial<GiveawayCoupon>) {
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
    publicCode!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    reservedAt!: Date

    @Index_()
    @Column_("text", {nullable: true})
    claimedBy!: string | undefined | null

    @Index_()
    @Column_("timestamp with time zone", {nullable: true})
    claimedAt!: Date | undefined | null

    @Column_("int4", {nullable: true})
    claimDurationInSeconds!: number | undefined | null
}
