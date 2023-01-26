import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  //documentacion https://docs.nestjs.com/openapi/introduction
  const config = new DocumentBuilder()
    .setTitle('APi')
    .setDescription('API Store')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  //cors
  app.enableCors();
  //await app.listen(3000);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
