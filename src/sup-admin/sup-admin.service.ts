import { Injectable } from '@nestjs/common';
import { CreateSupAdminDto } from './dto/create-sup-admin.dto';
import { UpdateSupAdminDto } from './dto/update-sup-admin.dto';

@Injectable()
export class SupAdminService {
  create(createSupAdminDto: CreateSupAdminDto) {
    return 'This action adds a new supAdmin';
  }

  findAll() {
    return `This action returns all supAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supAdmin`;
  }

  update(id: number, updateSupAdminDto: UpdateSupAdminDto) {
    return `This action updates a #${id} supAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} supAdmin`;
  }
}
