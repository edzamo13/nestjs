import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MongooseConfigService } from '../config/mongooseConfigService';

// const taskCollection = database.collection('tasks');
// const tasks = await taskCollection.find().toArray();
// MongooseModule.forRoot('mongodb://localhost:27017', {
//   user: 'root',
//   pass: 'root',
//   dbName: 'platzi-store',
// }),
/*MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: 'mongodb://mongoadmin:admin@localhost:27017/?authMechanism=DEFAULT',
    }),
  }),*/
@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
  ],
  providers: [MongooseModule],
  exports: [MongooseModule],
})
export class DatabaseModule {}
