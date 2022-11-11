import { Module } from '@nestjs/common';
import { ApitaskController } from './apitask.controller';
import { ApitaskService } from './apitask.service';

@Module({
  controllers: [ApitaskController],
  providers: [ApitaskService],
})
export class ApitaskModule {}
