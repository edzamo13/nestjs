import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import databaseConfig from 'src/config/database.config';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  @Inject()
  private readonly configService: ConfigService;
  @Inject(databaseConfig.KEY)
  private dbConfig: ConfigType<typeof databaseConfig>;

  createMongooseOptions(): MongooseModuleOptions {
    console.log(this.dbConfig);
    return {
      uri: `${this.dbConfig.mongo.connection}://${this.dbConfig.mongo.host}:${this.dbConfig.mongo.port}`,
      dbName: this.dbConfig.mongo.dbName,
      user: this.dbConfig.mongo.user,
      pass: this.dbConfig.mongo.password,
    };
  }
}
