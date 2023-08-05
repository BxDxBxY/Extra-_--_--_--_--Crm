import { PartialType } from '@nestjs/mapped-types';
import { CreateSupAdminDto } from './create-sup-admin.dto';

export class UpdateSupAdminDto extends PartialType(CreateSupAdminDto) {}
