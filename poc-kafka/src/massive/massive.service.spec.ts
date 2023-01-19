import { Test, TestingModule } from '@nestjs/testing';
import { MassiveService } from './massive.service';

describe('MassiveService', () => {
  let service: MassiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MassiveService],
    }).compile();

    service = module.get<MassiveService>(MassiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
