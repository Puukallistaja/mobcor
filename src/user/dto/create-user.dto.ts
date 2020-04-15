import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, MinLength } from 'class-validator'
export class CreateUserDto {
  @ApiProperty({ required: false })
  name?: string

  @ApiProperty()
  @IsEmail()
  email: string

  @ApiProperty()
  @MinLength(8)
  password: string
}
