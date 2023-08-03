import { Column as Column_, Entity as Entity_, Index as Index_, ManyToOne as ManyToOne_, PrimaryColumn as PrimaryColumn_ } from "typeorm"
import { Domain } from "./domain.model"

// So, this is a bit complicated and I never did this before so you might wanna have a look at it.

// This composite unique index is suited for the latest referrals of a domain
@Index_(["fromDomain", "referredAt"], {unique: true})
@Entity_()
export class Referral {
    constructor(props?: Partial<Referral>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Domain, {nullable: false})
    @Column_("text", {nullable: false})
    fromDomain!: Domain

    @Column_("text", {nullable: false, unique: true})
    forDomain!: Domain

    @Column_("number", {nullable: false})
    referrerPayout!: number

    @Column_("number", {nullable: false})
    refereeDiscount!: number

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    referredAt!: Date
}
