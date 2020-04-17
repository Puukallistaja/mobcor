import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import { User, UserModel } from 'src/user/user.interface'
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User[]> {
    return this.userService.find({ email, password })
  }

  async assignToken({ name, email, _id }: UserModel) {
    const jwtPayload = { name, email, sub: _id, roles: ['user'] }
    return {
      accessToken: this.jwtService.sign(jwtPayload),
    }
  }
}
