import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common'
import { TaskService } from './task.service'
import { Task, TaskStatus } from './task.model'
import { CreateTaskDto } from './dto/createTask.dto'
import { UpdateTaskDto } from './dto/updateTask.dto'
import { GetTaskFilterDto } from './dto/getTaskFilter.dto'
import { ApiQuery } from '@nestjs/swagger'

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  @ApiQuery({ name: 'search', type: String, required: false, })
  @ApiQuery({ name: 'status', enum: TaskStatus, required: false, })
  getTasks(@Query() filterDto: GetTaskFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.taskService.getAllTasksWithFilters(filterDto)
    } else {
      return this.taskService.getAllTasks()
    }
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id)
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Task[] {
    return this.taskService.deleteTask(id)
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto)
  }

  @Patch(':id/status')
  updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Task {
    return this.taskService.updateTask({ id, updateTaskDto })
  }
}
