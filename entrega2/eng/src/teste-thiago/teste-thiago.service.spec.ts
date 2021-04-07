import { Test, TestingModule } from '@nestjs/testing';
import { TesteThiagoService } from './teste-thiago.service';

describe('TesteThiagoService', () => {
  let service: TesteThiagoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TesteThiagoService],
    }).compile();

    service = module.get<TesteThiagoService>(TesteThiagoService);
  });

  it('usaCartaoParaAssinarCurso', () => {
    const aluno = service.findAluno();
    const curso = 'ASP.NET';
    service.comprarCursoComCartao(aluno, curso);
    const cursoComprado = service.getCursos(aluno);

    expect(cursoComprado).toContainEqual(expect.objectContaining({ nome: 'ASP.NET'}));
  });
});
