import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //This forms you can use way form global
  app.useGlobalPipes(new ValidationPipe());
  //This way global Exception filter
  app.useGlobalFilters(new AllExceptionFilter());
  // This way is for add interceptor
  app.useGlobalInterceptors(new TimeOutInterceptor());
  await app.listen(3000);
}
bootstrap();
