import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Reservation {
    constructor(props?: Partial<Reservation>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    name!: string

    @Column_("text", {nullable: false})
    tld!: string

    @Column_("text", {nullable: true})
    address!: string | undefined | null
}
