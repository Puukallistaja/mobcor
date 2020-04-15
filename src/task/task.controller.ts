import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  ValidationPipe,
} from '@nestjs/common'
import { TaskService } from './task.service'
import { Task, TaskStatus } from './task.model'
import { CreateTaskDto } from './dto/createTask.dto'
import { UpdateTaskDto } from './dto/updateTask.dto'
import { GetTaskFilterDto } from './dto/getTaskFilter.dto'
import { ApiQuery, ApiTags, ApiBody } from '@nestjs/swagger'
import { TaskStatusValidationPipe } from './task-status-validation.pipe'

@Controller('task')
@ApiTags('Tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  @ApiQuery({ name: 'search', type: String, required: false })
  @ApiQuery({ name: 'status', enum: TaskStatus, required: false })
  getTasks(
    @Query(ValidationPipe) filterDto: GetTaskFilterDto,
  ): Promise<Task[]> {
    return this.taskService.find(filterDto)
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.taskService.findById(id)
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.delete(id)
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.create(createTaskDto)
  }

  @Patch(':id/status')
  @ApiBody({ type: UpdateTaskDto })
  updateTask(
    @Param('id') id: string,
    @Body('status', TaskStatusValidationPipe) status: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.update(id, status)
  }
}
