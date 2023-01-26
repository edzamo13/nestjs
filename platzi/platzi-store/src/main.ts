import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ingora datos adicionales enviados en solicitud
      forbidNonWhitelisted: true, // alerta si envias datos addiconales
    }),
  );
  await app.listen(3000);
}
bootstrap();
