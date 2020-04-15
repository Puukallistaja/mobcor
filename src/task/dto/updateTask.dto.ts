import { ApiProperty, ApiBody, ApiQuery } from "@nestjs/swagger"
import { TaskStatus } from "../task.model"

export class UpdateTaskDto {
  @ApiProperty({name: 'status', enum: TaskStatus})
  status: TaskStatus
}
