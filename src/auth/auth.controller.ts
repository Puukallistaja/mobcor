import { Controller, Body, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiTags } from '@nestjs/swagger'
import { UserService } from '../user/user.service'
import { LoginUserDto } from './dtos/user.dto'
import { CreateUserDto } from 'src/user/dto/create-user.dto'

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  // @Post('login')
  // @UseGuards(AuthGuard('local'))
  // async login(@Body() user: LoginUserDto) {
  //   return this.userService.create(user)
  // }

  // @Post('register')
  // async register(@Body() user: CreateUserDto) {
  //   return this.userService.create(user)
  // }
}
