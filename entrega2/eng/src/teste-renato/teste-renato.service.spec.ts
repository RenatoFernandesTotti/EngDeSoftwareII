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

  // Renato Aurélio Fernandes Totti - 171586
  it('alunoCompraCurso', () => {
    const aluno = service.findAluno();
    const curso = 'jest';
    const alunoup = service.comprarCurso(aluno, curso);

    expect(alunoup.cursos[0]).toStrictEqual({ nome: 'Jest', preco: 50 });
  });

  // Giovanne Prestes Dias - 171029
  it('alunoTerminaCursoMediaMaior7', () => {
    const aluno = service.findAluno();
    const curso = service.getCursoTerminado(aluno, 'Xamarin');

    expect(curso.terminado).toBeTruthy();
    expect(curso.media).toBeGreaterThan(7);
  });

  // Lucas Souza Maximiano - 171114
  it('alunoComVoucherPodeSerAlocado', () => {
    const aluno = service.findAluno();
    expect(aluno.pagante).toBeTruthy();
    const cursos = service.getCursos(aluno);
    expect(cursos.length).toBeGreaterThanOrEqual(12);
    service.receberVoucher(aluno);
    expect(aluno.voucher).toBeDefined();
    expect(service.podeSerAlocado(aluno)).toBeTruthy();
  });

  // Gustavo Motta Tranche - 171071
  it('alunoSeraPremiumCom12Cursos', () => {
    const aluno = service.findAluno();
    expect(aluno.pagante).toBeTruthy();
    const cursos = service.getCursos(aluno);
    expect(cursos.length).toBeGreaterThanOrEqual(12);
    expect(aluno.premium).toBeFalsy();
    service.tornarPremium(aluno);
    expect(aluno.premium).toBeTruthy();
  });

  // Letícia Vigna Modenese Silva - 171869
  it('alunoAcessaComentariosDeOutrosAlunosEmForum', () => {
    const aluno = service.findAluno();
    expect(aluno.pagante).toBeTruthy();

    const curso = service.getCursoEmAndamento(aluno, 'Java');
    expect(curso.forum.getPermissaoComentarios(aluno)).toBeTruthy();
  });
});
