import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {RestaurantSchema} from "../restaurant/schemas/restaurant.schema";
import {RestaurantService} from "../restaurant/restaurant.service";
import {RestaurantController} from "../restaurant/restaurant.controller";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Restaurant', schema: RestaurantSchema }])],
  providers: [RestaurantService],
  controllers: [RestaurantController],
  exports: [RestaurantService],
})
export class RestaurantModule {}
