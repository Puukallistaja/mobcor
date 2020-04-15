import { Document } from 'mongoose'

export interface User {
  name?: string
  email: string
  password: string
}

export interface UserModel extends User, Document {}
