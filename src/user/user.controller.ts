import { Controller, Body, Get, Post, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/create-user.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger';

@Controller('user')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async userList(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post()
  async userCreate(@Body() newUser: CreateUserDto): Promise<User> {
    return this.userService.create(newUser)
  }

  @Get(':id')
  @ApiParam({name: 'id', type: String})
  getUser(@Param() {id}): Promise<User> {
    return this.userService.findOne(id);
  }

  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(@Body() user: LoginUserDto) {
  //   return user;
  // }
}
