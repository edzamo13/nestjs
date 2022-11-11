import { AllExceptionFilter } from './common/filters/http-exceptions.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter()); // use global filter
  app.useGlobalInterceptors(new TimeOutInterceptor()); // use global Interceptor
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
