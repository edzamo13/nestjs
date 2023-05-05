import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { microServiceKafka } from './config/kafka.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(microServiceKafka);
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
