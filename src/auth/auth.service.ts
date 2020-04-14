import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    // const usersWithMatchingParameters = await this.userService.find({email});
    // usersWithMatchingParameters.find(user => user.password === password)
    // if (user && user.password === password) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    // return null;
  }
}