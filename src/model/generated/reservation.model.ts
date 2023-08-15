import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Index_(["tld", "name"], {unique: true})
@Entity_()
export class Reservation {
    constructor(props?: Partial<Reservation>) {
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
    @Column_("text", {nullable: true})
    address!: string | undefined | null

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    reservedAt!: Date
}
