import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  UsePipes,
  ValidationPipe,
  Delete,
} from '@nestjs/common'
import { UserService } from './user.service'
import { User } from './user.interface'
import { CreateUserDto } from './dto/create-user.dto'
import { ApiTags, ApiParam, ApiResponse } from '@nestjs/swagger'
import { FindByIdParam } from './classes/findById'

@Controller('user')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async userList(): Promise<User[]> {
    return await this.userService.find()
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async userCreate(@Body() newUser: CreateUserDto): Promise<User> {
    return this.userService.create(newUser)
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  getUser(@Param() { id }: FindByIdParam): Promise<User> {
    return this.userService.findById(id)
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: 200,
    description: 'Deleted',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  deleteUser(@Param() { id }: FindByIdParam): Promise<User> {
    return this.userService.delete(id)
  }

  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(@Body() user: LoginUserDto) {
  //   return user;
  // }
}
