import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Order} from "../order/interfaces/order.interface";
import {CreateOrderDto} from "../order/dtos/create-order.dto";
import {OrderListFiltersDto} from "../order/dtos/order-list-filters.dto";
import {OrderStatus} from "../order/models/order.model";
import {UpdateOrderDto} from "./dtos/update-order.dto";

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private orderModel: Model<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel({
      ...createOrderDto,
      status: OrderStatus.NEW,
    })
    return createdOrder.save()
  }

  async find(params?: OrderListFiltersDto): Promise<Order[]> {
    return this.orderModel.find(params)
  }

  async findById(id: string): Promise<Order> {
    return this.orderModel.findById(id)
  }

  async edit(
    id: string,
    status: UpdateOrderDto,
  ): Promise<Order> {
    const updatedOrder = await this.orderModel.findByIdAndUpdate(
      id,
      status,
      { new: true },
    )

    if (!updatedOrder) {
      throw new NotFoundException()
    }

    return updatedOrder
  }

  async delete(id: string): Promise<Order> {
    const deletedOrder = await this.orderModel.findByIdAndDelete(id)

    if (!deletedOrder) {
      throw new NotFoundException()
    }

    return deletedOrder
  }
}
