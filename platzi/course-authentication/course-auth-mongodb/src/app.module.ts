import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { environments } from './environments';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './module/products/products.module';
import { BrandsModule } from './module/brands/brands.module';
import { CategoriesModule } from './module/categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './module/users/users.module';
//import database from './config/database';
import databaseConfig from './config/database.config';
import * as Joi from 'joi';

@Module({
  imports: [
    // HttpModule,
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        JWT_SECRET: Joi.string().required(),
        //  DATABASE_NAME: Joi.string().required(),
        // DATABASE_PORT: Joi.number().required(),
      }),
    }),

    DatabaseModule,

    ProductsModule,

    BrandsModule,

    CategoriesModule,

    AuthModule,

    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
