import { PipeTransform, BadRequestException } from '@nestjs/common'
import { TaskStatus, TaskStatusArray } from './task.model'

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = TaskStatusArray

  transform(status: any) {
    if (this.isStatusValid(status.toUpperCase())) {
      return status
    }
    throw new BadRequestException('Invalid status')
  }

  private isStatusValid(status: TaskStatus):boolean {
    return this.allowedStatuses.includes(status)
  }
}
