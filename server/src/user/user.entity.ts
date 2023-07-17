import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Field()
  email: string;
}
