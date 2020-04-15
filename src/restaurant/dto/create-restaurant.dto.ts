import { ApiProperty } from '@nestjs/swagger'
export class CreateRestaurantDto {
  @ApiProperty()
  name?: string

  @ApiProperty()
  description: string

  @ApiProperty()
  address: string
}
