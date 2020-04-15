import * as mongoose from 'mongoose'

// interface has to extend mongoose document or we get TS error when using interface with mongoose
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33824
export interface User extends mongoose.Document {
  name?: string
  email: string
  password: string
}
