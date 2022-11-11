import { ApitaskService } from './apitask/apitask.service';
import { ApitaskController } from './apitask/apitask.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { ApitaskModule } from './apitask/apitask.module';

@Module({
  imports: [TaskModule, ApitaskModule],
  controllers: [AppController, TaskController, ApitaskController],
  providers: [AppService, TaskService, ApitaskService],
})
export class AppModule {}
