import { Schema } from 'mongoose'
import { TaskStatusArray } from './task.model'

export const TaskSchema = new Schema({
  title: String,
  description: String,
  status: { type: String, enum: TaskStatusArray },
})
