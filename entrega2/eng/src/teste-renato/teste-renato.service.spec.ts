import { Test, TestingModule } from '@nestjs/testing';
import { TesteRenatoService } from './teste-renato.service';

describe('TesteRenatoService', () => {
  let service: TesteRenatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TesteRenatoService],
    }).compile();

    service = module.get<TesteRenatoService>(TesteRenatoService);
  });

  it('alunoCompraCurso', () => {
    const aluno = service.findAluno();
    const curso = 'jest';
    const alunoup = service.comprarCurso(aluno, curso);

    expect(alunoup.cursos[0]).toStrictEqual({ nome: 'jest', preco: 50 });
  });
});
