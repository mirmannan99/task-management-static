import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private task: Task[] = [];

  getAllTasks(): Task[] {
    return this.task;
  }

  getTaskById(id: string): Task {
    const found = this.task.find((task) => task.id === id);
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }

  getTasksWithFilter(filterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }
    if (search) {
      (task) =>
        task.title.includes(search) || task.description.includes(search);
    }
    return tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      title,
      description,
      status: TaskStatus.OPEN,
      id: uuid(),
    };

    this.task.push(task);
    return task;
  }

  deleteTask(id: string): void {
    const found = this.getTaskById(id);
    this.task = this.task.filter((task) => task.id !== found.id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    try {
      const task: Task = this.getTaskById(id);
      if (!task) {
        throw new Error('Task not found');
      }
      task.status = status;
      return task;
    } catch (err) {
      return err.message;
    }
  }
}
