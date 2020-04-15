import { ApiProperty } from '@nestjs/swagger'
import { TaskStatus } from '../task.model'

export class UpdateTaskDto {
  @ApiProperty({ name: 'status', enum: TaskStatus })
  status: TaskStatus
}
