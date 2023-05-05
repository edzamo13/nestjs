import { Controller, Get, Post } from '@nestjs/common';
import {
  Client,
  ClientKafka,
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { microServiceKafka } from 'src/config/kafka.config';
import { MassiveService } from './massive.service';

@Controller('kafka')
export class MassiveController {
  @Client(microServiceKafka)
  client: ClientKafka;

  constructor(private massiveService: MassiveService) {}

  @Post()
  sendHello(): string {
    // fire event to kafka
    // this.client.emit<string>('entity-created', 'some entity ' + new Date());
    this.client.emit<string>('massive-topic', 'some entity ' + new Date());
    return this.massiveService.getHello();
  }

  @MessagePattern('massive-topic')
  killDragon(@Payload() message: any, @Ctx() context: KafkaContext): any {
    console.log('******', { message });
    // console.log('******', { context });
    const data = { message };

    return data;
  }
}
