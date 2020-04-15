import { Schema } from 'mongoose'
import { OrderStatusArray } from '../models/order.model'

export const OrderSchema = new Schema({
  restaurantId: String,
  userId: String,
  price: Number,
  status: { type: String, enum: OrderStatusArray },
})
