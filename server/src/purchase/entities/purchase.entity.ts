import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Purchase {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
