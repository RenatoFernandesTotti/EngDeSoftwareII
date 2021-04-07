import { PartialType } from '@nestjs/mapped-types';
import { CreateTesteRenatoDto } from './create-teste-renato.dto';

export class UpdateTesteRenatoDto extends PartialType(CreateTesteRenatoDto) {}
