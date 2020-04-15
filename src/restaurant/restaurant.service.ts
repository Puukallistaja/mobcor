import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Restaurant} from "../restaurant/interfaces/restaurant.interface";
import {CreateRestaurantDto} from "../restaurant/dtos/create-restaurant.dto";

@Injectable()
export class RestaurantService {
  constructor(@InjectModel('Restaurant') private restaurantModel: Model<Restaurant>) {}

  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const createdRestaurant = new this.restaurantModel(createRestaurantDto)
    return createdRestaurant.save()
  }
  async find(params?: Restaurant): Promise<Restaurant[]> {
    return this.restaurantModel.find(params)
  }
  async findById(id: string): Promise<Restaurant> {
    return this.restaurantModel.findById(id)
  }

  async edit(id: string): Promise<Restaurant> {
    return this.restaurantModel.findById(id)
  }

  async delete(id: string): Promise<Restaurant> {
    return this.restaurantModel.findByIdAndRemove(id)
  }
}
