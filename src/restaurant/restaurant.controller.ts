import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {Restaurant} from "../restaurant/interfaces/restaurant.interfaces";
import {CreateRestaurantDto} from "../restaurant/dtos/create-restaurant.dto";
import {ApiParam} from "@nestjs/swagger";
import {RestaurantService} from "../restaurant/restaurant.service";

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async restaurantList(): Promise<Restaurant[]> {
    return await this.restaurantService.find();
  }

  @Post()
  async restaurantCreate(@Body() newRestaurant: CreateRestaurantDto): Promise<Restaurant> {
    return this.restaurantService.create(newRestaurant)
  }

  @Patch(':id')
  @ApiParam({name: 'id', type: String})
  async restaurantEdit(@Body() restaurant: CreateRestaurantDto): Promise<Restaurant> {
    return this.restaurantService.edit(id)
  }

  @Get(':id')
  @ApiParam({name: 'id', type: String})
  getRestaurant(@Param() {id}): Promise<Restaurant> {
    return this.restaurantService.findById(id);
  }

  @Delete(':id')
  @ApiParam({name: 'id', type: String})
  deleteRestaurant(@Param() {id}): Promise<Restaurant> {
    return this.restaurantService.delete(id);
  }
}
