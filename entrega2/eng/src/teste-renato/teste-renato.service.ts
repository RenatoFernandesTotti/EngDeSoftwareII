import { Injectable } from '@nestjs/common';
import { CreateTesteRenatoDto } from './dto/create-teste-renato.dto';
import { UpdateTesteRenatoDto } from './dto/update-teste-renato.dto';

@Injectable()
export class TesteRenatoService {
  create(createTesteRenatoDto: CreateTesteRenatoDto) {
    return 'This action adds a new testeRenato';
  }

  findAll() {
    return `This action returns all testeRenato`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testeRenato`;
  }

  update(id: number, updateTesteRenatoDto: UpdateTesteRenatoDto) {
    return `This action updates a #${id} testeRenato`;
  }

  remove(id: number) {
    return `This action removes a #${id} testeRenato`;
  }

  // getCurso(nome) {
  //   const cursos = [
  //     { nome: 'jest', preco: 50 },
  //     { nome: 'node', preco: 50 },
  //     { nome: 'js', preco: 50 },
  //     { nome: 'azure', preco: 50 },
  //   ];
  //   return cursos.find((c) => c.nome === nome);
  // }
  // findAluno() {
  //   return { nome: 'renato', grana: 100, cursos: [] };
  // }

  // comprarCurso(aluno, curso) {
  //   const cursoFixo = this.getCurso(curso);
  //   const alunoup = { ...aluno };
  //   aluno.grana >= cursoFixo.preco && alunoup.cursos.push(cursoFixo);
  //   return alunoup;
  // }
}
