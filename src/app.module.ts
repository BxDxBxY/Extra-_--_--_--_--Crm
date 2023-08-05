import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupAdminModule } from './sup-admin/sup-admin.module';

@Module({
  imports: [SupAdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
