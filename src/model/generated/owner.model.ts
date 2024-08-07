import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Domain} from "./domain.model"

@Entity_()
export class Owner {
    constructor(props?: Partial<Owner>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @OneToMany_(() => Domain, e => e.owner)
    domains!: Domain[]
}
