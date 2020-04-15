import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import {
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
import { OrderService } from '../order/order.service'
import { Order } from '../order/interfaces/order.interface'
import { CreateOrderDto } from '../order/dtos/create-order.dto'
import { OrderStatus } from '../order/models/order.model'
import { OrderListFiltersDto } from '../order/dtos/order-list-filters.dto'
import { UpdateOrderDto } from '../order/dtos/update-order.dto'
import { OrderStatusValidationPipe } from '../order/pipes/order-status-validation.pipe'

@Controller('order')
@ApiTags('Orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @ApiQuery({ name: 'status', enum: OrderStatus, required: false })
  async orderList(
    @Query(ValidationPipe) filterDto: OrderListFiltersDto,
  ): Promise<Order[]> {
    return await this.orderService.find(filterDto)
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async orderCreate(@Body() newOrder: CreateOrderDto): Promise<Order> {
    return this.orderService.create(newOrder)
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  @ApiBody({ type: UpdateOrderDto })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async orderEdit(
    @Param('id') id: string,
    @Body('status', OrderStatusValidationPipe) status: UpdateOrderDto,
  ): Promise<Order> {
    return this.orderService.edit(id, status)
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  getOrder(@Param('id') id): Promise<Order> {
    const foundOrder = this.orderService.findById(id)
    if (!foundOrder) {
      throw new NotFoundException()
    }
    return foundOrder
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: 200,
    description: 'Deleted',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  deleteOrder(@Param() { id }): Promise<Order> {
    return this.orderService.delete(id)
  }
}
