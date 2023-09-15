import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.respository';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
