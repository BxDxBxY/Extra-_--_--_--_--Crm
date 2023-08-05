import { Test, TestingModule } from '@nestjs/testing';
import { SupAdminService } from './sup-admin.service';

describe('SupAdminService', () => {
  let service: SupAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupAdminService],
    }).compile();

    service = module.get<SupAdminService>(SupAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
