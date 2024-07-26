import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, StringColumn as StringColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Index_(["tld", "name"], {unique: true})
@Entity_()
export class Reservation {
    constructor(props?: Partial<Reservation>) {
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
    @StringColumn_({nullable: true})
    address!: string | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    reservedAt!: Date
}
