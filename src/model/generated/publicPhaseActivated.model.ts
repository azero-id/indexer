import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, DateTimeColumn as DateTimeColumn_, Index as Index_} from "@subsquid/typeorm-store"

@Entity_()
export class PublicPhaseActivated {
    constructor(props?: Partial<PublicPhaseActivated>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @DateTimeColumn_({nullable: false})
    activatedAt!: Date
}
