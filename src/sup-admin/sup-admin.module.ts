import { Module } from '@nestjs/common';
import { SupAdminService } from './sup-admin.service';
import { SupAdminController } from './sup-admin.controller';

@Module({
  controllers: [SupAdminController],
  providers: [SupAdminService]
})
export class SupAdminModule {}
