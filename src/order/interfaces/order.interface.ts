import * as mongoose from 'mongoose'

// interface has to extend mongoose document or we get TS error when using interface with mongoose
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33824
export interface Order extends mongoose.Document {
  restaurantId: string
  userId: string
  status: string
  price: number
  items: string[]
}
