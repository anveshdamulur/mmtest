import {
  Body,
  Controller,
  Delete,
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

@Controller('user')
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
  signin(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ jwtAccessToken: string }> {
    return this.userService.signIn(createUserDto);
  }
  @Get('/:id')
  findById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }
  @Delete('/:id')
  deleteUser(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser(id);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req);
  }
}
