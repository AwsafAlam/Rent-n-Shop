import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignupInput } from './dto/signup.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { AuthResponse } from './dto/auth-response';
import { User } from 'src/user/user.entity';
import { SigninInput } from './dto/signin.input';

@Resolver(() => AuthResponse)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse)
  signup(@Args('signUpInput') signUpInput: SignupInput) {
    return this.authService.signup(signUpInput);
  }

  @Mutation(() => AuthResponse)
  signin(@Args('signInInput') signInInput: SigninInput) {
    return this.authService.signin(signInInput);
  }

  @Query(() => AuthResponse, { name: 'auth' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authService.findOne(id);
  }

  @Mutation(() => User)
  updateAuth(@Args('updateAuthInput') updateAuthInput: UpdateAuthInput) {
    return this.authService.update(updateAuthInput.id, updateAuthInput);
  }

  @Mutation(() => AuthResponse)
  removeAuth(@Args('id', { type: () => Int }) id: number) {
    return this.authService.remove(id);
  }
}
