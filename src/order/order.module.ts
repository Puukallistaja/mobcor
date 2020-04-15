import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {OrderSchema} from "../order/schemas/order.schema";
import {OrderService} from "../order/order.service";
import {OrderController} from "../order/order.controller";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }])],
  providers: [OrderService],
  controllers: [OrderController],
  exports: [OrderService],
})
export class OrderModule {}
