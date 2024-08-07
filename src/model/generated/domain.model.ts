import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, StringColumn as StringColumn_, ManyToOne as ManyToOne_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Owner} from "./owner.model"

@Index_(["tld", "name"], {unique: true})
@Entity_()
export class Domain {
    constructor(props?: Partial<Domain>) {
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
    @ManyToOne_(() => Owner, {nullable: true})
    owner!: Owner

    @Index_()
    @DateTimeColumn_({nullable: false})
    registeredAt!: Date

    @Index_()
    @DateTimeColumn_({nullable: true})
    expiresAt!: Date | undefined | null
}
