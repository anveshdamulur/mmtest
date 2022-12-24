import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { SignInDto } from './dto/SignIn.dto';

@Controller('v1/api/auth')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  findAllUser(): Promise<User[]> {
    return this.userService.findAllUser();
  }
  @Post('/signup')
  signUp(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.userService.signUp(createUserDto);
  }
  @Post('signin')
  signin(@Body() signInDto: SignInDto): Promise<{ jwtAccessToken: string }> {
    return this.userService.signIn(signInDto);
  }
  @Get('/:id')
  findById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req.user);
  }
}
