import { Injectable } from '@nestjs/common'
import { Task, TaskStatus } from './task.model'
import { randomBytes } from 'crypto'
import { CreateTaskDto } from './dto/createTask.dto'
import { UpdateTaskDto } from './dto/updateTask.dto'

@Injectable()
export class TaskService {
  private tasks: Task[] = []

  public getAllTasks(): Task[] {
    return this.tasks
  }

  public createTask({ title, description }: CreateTaskDto): Task {
    const task: Task = {
      title,
      description,
      status: TaskStatus.OPEN,
      id: randomBytes(8).toString('hex'),
    }
    this.tasks = [...this.tasks, task]
    return task
  }

  public getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id)
  }

  public deleteTask(id: string): Task[] {
    this.tasks = this.tasks.filter(task => task.id !== id)
    return this.tasks
  }

  public updateTask({
    id,
    updateTaskDto,
  }: {
    id: string
    updateTaskDto: UpdateTaskDto
  }): Task {
    const task = this.getTaskById(id)
    task.status = updateTaskDto.status
    return task
  }
}
