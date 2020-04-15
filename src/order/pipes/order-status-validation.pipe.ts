import { PipeTransform, BadRequestException } from '@nestjs/common'
import { OrderStatus, OrderStatusArray } from '../models/order.model'

export class OrderStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = OrderStatusArray

  transform(status: any) {
    if (this.isStatusValid(status.toUpperCase())) {
      return status
    }
    throw new BadRequestException('Invalid status')
  }

  private isStatusValid(status: OrderStatus):boolean {
    return this.allowedStatuses.includes(status)
  }
}
