import { Controller, Body, Get, Post, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiParam, ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';
import { LoginUserDto } from "./auth/dto/login-user.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user/:id')
  @ApiParam({name: 'id', type: Number})
  getUser(@Param() params): string {
    return this.appService.getHello(params.id);
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() user: LoginUserDto) {
    return user;
  }
}
