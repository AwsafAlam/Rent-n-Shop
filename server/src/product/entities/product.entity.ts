import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  price?: number;

  @Field()
  rent_daily?: number;
}
