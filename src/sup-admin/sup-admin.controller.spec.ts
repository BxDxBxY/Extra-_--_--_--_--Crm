import { Test, TestingModule } from '@nestjs/testing';
import { SupAdminController } from './sup-admin.controller';
import { SupAdminService } from './sup-admin.service';

describe('SupAdminController', () => {
  let controller: SupAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupAdminController],
      providers: [SupAdminService],
    }).compile();

    controller = module.get<SupAdminController>(SupAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
