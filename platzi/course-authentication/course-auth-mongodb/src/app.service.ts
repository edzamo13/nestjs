import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTasks() {
    //  const tasksCollection = this.database.collection('tasks');
    return 'tasksCollection.find().toArray()';
  }
}
