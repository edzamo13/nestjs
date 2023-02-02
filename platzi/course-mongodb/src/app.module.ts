import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { environments } from './environments';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './module/products/products.module';
import { BrandsModule } from './module/brands/brands.module';
import { CategoriesModule } from './module/categories/categories.module';
import database from './config/database';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    // HttpModule,
    ConfigModule.forRoot({
      load: [database, databaseConfig],
      isGlobal: true,
      //envFilePath: environments[process.env.NODE_ENV] || '.env',
      /* validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),*/
    }),

    DatabaseModule,

    ProductsModule,

    BrandsModule,

    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
