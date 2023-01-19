import { Module } from '@nestjs/common';
import { MassiveController } from './massive.controller';
import { MassiveService } from './massive.service';

@Module({
  controllers: [MassiveController],
  providers: [MassiveService],
})
export class MassiveModule {}
