import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from 'src/apitask/task.interface';
import { TaskDto } from './dto/TaskDto';

@Injectable()
export class ApitaskService {
  tasks: ITask[] = [];

  deleteById(id: string): boolean {
    const itaskPosition = this.tasks.findIndex((item) => item.id === id);

    console.log(itaskPosition);

    if (itaskPosition >= 0) {
      this.tasks.splice(itaskPosition, 1);
      return true;
    } else {
      return false;
    }
  }

  updateById(id: string, taskDto: TaskDto): ITask {
    const newTask: ITask = { id, ...taskDto };
    this.tasks = this.tasks.map((item) => (item.id === id ? newTask : item));
    return newTask;
  }

  findById(id: string): ITask {
    return this.tasks.find((item) => item.id === id);
  }

  findAll(): ITask[] {
    return this.tasks;
  }

  create(taskDto: TaskDto): ITask {
    const task = {
      id: uuidv4(),
      ...taskDto,
    };
    this.tasks.push(task);
    return task;
  }
}
