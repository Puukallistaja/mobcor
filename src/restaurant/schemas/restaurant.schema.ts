import { Schema } from 'mongoose'

export const RestaurantSchema = new Schema({
  name: String,
  description: String,
  address: String,
})
