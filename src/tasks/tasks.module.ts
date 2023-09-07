import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.respository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    // Importing the TypeOrmModule to use the repository
    TypeOrmModule.forFeature([TaskRepository]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
