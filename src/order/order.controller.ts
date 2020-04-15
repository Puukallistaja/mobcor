import {Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiParam, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";
import {OrderService} from "../order/order.service";
import {Order} from "../order/interfaces/order.interface";
import {CreateOrderDto} from "../order/dtos/create-order.dto";
import {OrderStatus} from "../order/models/order.model";

@Controller('order')
@ApiTags('Orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @ApiQuery({ name: 'status', enum: OrderStatus, required: false })
  async orderList(): Promise<Order[]> {
    return await this.orderService.find();
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
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async orderEdit(@Param('id') id: string, @Body() order: CreateOrderDto): Promise<Order> {
    return this.orderService.edit(id, order)
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
    return this.orderService.findById(id);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: 200,
    description: 'Deleted',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  deleteOrder(@Param() {id}): Promise<Order> {
    return this.orderService.delete(id);
  }
}
