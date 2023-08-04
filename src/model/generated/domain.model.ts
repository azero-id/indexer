import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import {Owner} from "./owner.model"

@Index_(["tld", "name"], {unique: true})
@Entity_()
export class Domain {
    constructor(props?: Partial<Domain>) {
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
    @ManyToOne_(() => Owner, {nullable: true})
    owner!: Owner

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    registeredAt!: Date
}
