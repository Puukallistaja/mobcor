import { ApiProperty, ApiBody, ApiQuery } from "@nestjs/swagger"
import { TaskStatus } from "../task.model"

export enum UserRole {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User',
}

export class UpdateTaskDto {
  @ApiProperty({name: 'status', enum: TaskStatus})
  status: TaskStatus
}
