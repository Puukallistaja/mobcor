import { ApiProperty } from '@nestjs/swagger'
import {OrderItems} from "../models/order.model";

export class CreateOrderDto {
  @ApiProperty()
  restaurantId?: string

  @ApiProperty()
  userId: string

  @ApiProperty()
  price: string

  @ApiProperty()
  status: string

  @ApiProperty()
  items: Array<OrderItems>
}
