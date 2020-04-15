import {Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {Restaurant} from "../restaurant/interfaces/restaurant.interface";
import {CreateRestaurantDto} from "../restaurant/dtos/create-restaurant.dto";
import {ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {RestaurantService} from "../restaurant/restaurant.service";

@Controller('restaurant')
@ApiTags('Restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async restaurantList(): Promise<Restaurant[]> {
    return await this.restaurantService.find();
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async restaurantCreate(@Body() newRestaurant: CreateRestaurantDto): Promise<Restaurant> {
    return this.restaurantService.create(newRestaurant)
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async restaurantEdit(@Param() id: string, @Body() restaurant: CreateRestaurantDto): Promise<Restaurant> {
    return this.restaurantService.edit(id, restaurant)
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  getRestaurant(@Param() {id}): Promise<Restaurant> {
    return this.restaurantService.findById(id);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: 200,
    description: 'Deleted',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  deleteRestaurant(@Param() {id}): Promise<Restaurant> {
    return this.restaurantService.delete(id);
  }
}
