import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Task, TaskStatus } from './task.model'
import { CreateTaskDto, UpdateTaskDto, GetTaskFilterDto } from './dto'

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel({
      ...createTaskDto,
      status: TaskStatus.OPEN,
    })
    return createdTask.save()
  }

  async find(params?: GetTaskFilterDto): Promise<Task[]> {
    return this.taskModel.find(params)
  }

  async findById(id: string): Promise<Task> {
    const foundTask = await this.taskModel.findById(id)
    if (!foundTask) {
      throw new NotFoundException()
    }
    return foundTask
  }

  async update(id: string, status: UpdateTaskDto): Promise<Task> {
    const foundTask = await this.taskModel.findByIdAndUpdate(id, status)
    if (!foundTask) {
      throw new NotFoundException()
    }
    return foundTask
  }

  async delete(id: string): Promise<Task> {
    const deletedTask = await this.taskModel.findOneAndDelete({ _id: id })

    if (!deletedTask) {
      throw new NotFoundException()
    }

    return deletedTask
  }
}
