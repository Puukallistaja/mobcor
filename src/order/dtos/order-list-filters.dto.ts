import { OrderStatus, OrderStatusArray } from '../models/order.model'
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator'

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn(OrderStatusArray)
  status?: OrderStatus

  @IsOptional()
  @IsNotEmpty()
  search?: string
}
