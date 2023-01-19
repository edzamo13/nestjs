import { Injectable } from '@nestjs/common';

@Injectable()
export class MassiveService {
  getHello(): string {
    return 'Hello World! ' + new Date();
  }
}
