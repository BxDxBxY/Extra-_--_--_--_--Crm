import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupAdminService } from './sup-admin.service';
import { CreateSupAdminDto } from './dto/create-sup-admin.dto';
import { UpdateSupAdminDto } from './dto/update-sup-admin.dto';

@Controller('sup-admin')
export class SupAdminController {
  constructor(private readonly supAdminService: SupAdminService) {}

  @Post()
  create(@Body() createSupAdminDto: CreateSupAdminDto) {
    return this.supAdminService.create(createSupAdminDto);
  }

  @Get()
  findAll() {
    return this.supAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupAdminDto: UpdateSupAdminDto) {
    return this.supAdminService.update(+id, updateSupAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supAdminService.remove(+id);
  }
}
