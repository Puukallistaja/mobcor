import { Schema } from 'mongoose'

export const UserSchema = new Schema({
  name: { type: String, required: false },
  email: String,
  password: String,
})
