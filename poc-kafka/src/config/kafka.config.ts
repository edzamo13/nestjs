import { KafkaOptions, Transport } from '@nestjs/microservices';

export const microServiceKafka: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'massive-topic',
    },
  },
};
