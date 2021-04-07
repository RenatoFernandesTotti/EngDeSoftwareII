import { Injectable } from '@nestjs/common';
import { CreateTesteThiagoDto } from './dto/create-teste-thiago.dto';
import { UpdateTesteThiagoDto } from './dto/update-teste-thiago.dto';

@Injectable()
export class TesteThiagoService {
  create(createTesteThiagoDto: CreateTesteThiagoDto) {
    return 'This action adds a new testeThiago';
  }

  findAll() {
    return `This action returns all testeThiago`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testeThiago`;
  }

  update(id: number, updateTesteThiagoDto: UpdateTesteThiagoDto) {
    return `This action updates a #${id} testeThiago`;
  }

  remove(id: number) {
    return `This action removes a #${id} testeThiago`;
  }
}
