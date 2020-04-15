import { ApiProperty } from "@nestjs/swagger"
import { OrderStatus } from "../models/order.model"

export class UpdateOrderDto {
  @ApiProperty({name: 'status', enum: OrderStatus})
  status: OrderStatus
}
