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

  it('alunoTerminaCursoMediaMaior7', () => {
    const aluno = service.findAluno();
    const curso = service.getCursoTerminado(aluno, 'Xamarin');

    expect(curso.terminado).toBeTruthy();
    expect(curso.media).toBeGreaterThan(7);
  });

  it('alunoComVoucherPodeSerAlocado', () => {
    const aluno = service.findAluno();
    expect(aluno.pagante).toBeTruthy();
    const cursos = service.getCursos(aluno);
    expect(cursos.length).toBeGreaterThanOrEqual(12);
    service.receberVoucher(aluno);
    expect(aluno.voucher).toBeDefined();
    expect(service.podeSerAlocado(aluno)).toBeTruthy();
  });

  it('alunoSeraPremiumCom12Cursos', () => {
    const aluno = service.findAluno();
    expect(aluno.pagante).toBeTruthy();
    const cursos = service.getCursos(aluno);
    expect(cursos.length).toBeGreaterThanOrEqual(12);
    expect(aluno.premium).toBeFalsy();
    service.tornarPremium(aluno);
    expect(aluno.premium).toBeTruthy();
  });
});
