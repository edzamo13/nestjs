import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RabbitMQ } from './common/constants';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  /*
  const app = await NestFactory.createMicroservice(AppModule, {
    Transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQP_URL],
      queue: RabbitMQ.UserQueue,
    },
  });
  await app.listen();
*/

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: { urls: [process.env.AMQP_URL], queue: RabbitMQ.UserQueue },
    },
  );
  await app.listen();

  console.log('The microservice user is listening');
}
bootstrap();
