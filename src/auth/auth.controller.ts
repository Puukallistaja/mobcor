import { Controller, Post, UseGuards, Request } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiTags, ApiBody } from '@nestjs/swagger'
import { UserService } from '../user/user.service'
import { CredentialsDto } from './dto/credentials.dto'
import { AuthService } from './auth.service'

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  @ApiBody({ type: CredentialsDto })
  async login(@Request() req: any) {
    return this.authService.assignToken(req.user)
  }

  // @Post('register')
  // async register(@Body() user: CreateUserDto) {
  //   return this.userService.create(user)
  // }
}
