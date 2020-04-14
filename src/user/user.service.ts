import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserDto } from './dtos/create-user.dto'
import { User } from './interfaces/user.interface'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto)
    return createdUser.save()
  }
  async find(params?: User): Promise<User[]> {
    return this.userModel.find(params)
  }
  async findById(id: string): Promise<User> {
    return this.userModel.findById(id)
  }

}
