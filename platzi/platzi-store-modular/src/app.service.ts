import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apikey: string,
    // private config: ConfigService,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    // console.log(this.tasks);
    const apikey = this.configService.apikey;
    return `Hello World! ${apikey}`;
  }
}
