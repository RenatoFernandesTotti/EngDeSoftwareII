import { Test, TestingModule } from '@nestjs/testing';
import { TesteThiagoController } from './teste-thiago.controller';
import { TesteThiagoService } from './teste-thiago.service';

describe('TesteThiagoController', () => {
  let controller: TesteThiagoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TesteThiagoController],
      providers: [TesteThiagoService],
    }).compile();

    controller = module.get<TesteThiagoController>(TesteThiagoController);
  });
});
