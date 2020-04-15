import { TaskStatus, TaskStatusArray } from '../task.model'
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator'

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn(TaskStatusArray)
  status?: TaskStatus

  @IsOptional()
  @IsNotEmpty()
  search?: string
}
