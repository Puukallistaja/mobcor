import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Document } from 'mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './user.interface'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User & Document>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto)
    return createdUser.save()
  }

  async find(params?: User): Promise<User[]> {
    return this.userModel.find(params)
  }

  async findById(id: string): Promise<User> {
    const foundUser = await this.userModel.findById(id)
    if (!foundUser) {
      throw new NotFoundException()
    }
    return foundUser
  }

  async delete(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id)

    if (!deletedUser) {
      throw new NotFoundException()
    }

    return deletedUser
  }
}
