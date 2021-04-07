import { PartialType } from '@nestjs/mapped-types';
import { CreateTesteThiagoDto } from './create-teste-thiago.dto';

export class UpdateTesteThiagoDto extends PartialType(CreateTesteThiagoDto) {}
