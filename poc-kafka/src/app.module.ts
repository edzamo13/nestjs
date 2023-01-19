import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MassiveController } from './massive/massive.controller';
import { MassiveService } from './massive/massive.service';
import { MassiveModule } from './massive/massive.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'massive-topic_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'massive-topic',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'massive-topic-consumer',
          },
        },
      },
    ]),
    MassiveModule,
  ],
  controllers: [AppController, MassiveController],
  providers: [AppService, MassiveService],
})
export class AppModule {}
