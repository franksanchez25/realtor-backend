import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 @Post( 'login' )
 loginUser(@Body() loginUserDto: LoginUserDto) {

  return this.authService.login(loginUserDto);
}

@Post('register')
 registerUser(@Body() createUserDto: CreateUserDto){

  return this.authService.register(createUserDto);

}

}
