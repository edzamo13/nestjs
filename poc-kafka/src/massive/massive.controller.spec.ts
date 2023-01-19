import { Test, TestingModule } from '@nestjs/testing';
import { MassiveController } from './massive.controller';

describe('MassiveController', () => {
  let controller: MassiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MassiveController],
    }).compile();

    controller = module.get<MassiveController>(MassiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
