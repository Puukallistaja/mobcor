import { Document } from "mongoose";

export interface Order extends Document {
  title: string
  description: string
  status: OrderStatus
  items: OrderItems[]
}

export enum OrderStatus {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  NEW = 'NEW',
  CANCELL = 'CANCELL',
}

export const OrderStatusArray = [
  OrderStatus.NEW,
  OrderStatus.DONE,
  OrderStatus.CANCELL,
  OrderStatus.IN_PROGRESS,
]

export enum OrderItems {
  SMALL_COFFEE = 'SMALL_COFFEE',
  MID_COFFEE = 'MID_COFFEE',
  LARGE_COFFEE = 'LARGE_COFFEE',
}

export const OrderItemsArray = [
  OrderItems.SMALL_COFFEE,
  OrderItems.MID_COFFEE,
  OrderItems.LARGE_COFFEE,
]
