import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service'
@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}
  
  @Get(':id')
  getHello(@Param() params): string {
    
    return this.UserService.getUserId(params.id)
  }
}
