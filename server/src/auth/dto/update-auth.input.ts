import { IsString } from 'class-validator';
import { SignupInput } from './signup.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAuthInput extends PartialType(SignupInput) {
  @Field(() => Int)
  id: number;

  @IsString()
  @Field()
  first_name: string;

  @IsString()
  @Field()
  last_name: string;
}
