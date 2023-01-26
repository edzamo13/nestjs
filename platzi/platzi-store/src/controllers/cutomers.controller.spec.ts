import { Test, TestingModule } from '@nestjs/testing';
import { CutomersController } from './cutomers.controller';

describe('CutomersController', () => {
  let controller: CutomersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CutomersController],
    }).compile();

    controller = module.get<CutomersController>(CutomersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
