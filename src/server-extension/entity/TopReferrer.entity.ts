import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class TopReferrerEntity {
  constructor(props?: Partial<TopReferrerEntity>) {
    Object.assign(this, props)
  }

  @Field(() => String, { nullable: false })
  address!: string

  @Field(() => Number, { nullable: false, defaultValue: 0 })
  count!: number

  @Field(() => BigInt, { nullable: false, defaultValue: 0n })
  amount!: number
}
