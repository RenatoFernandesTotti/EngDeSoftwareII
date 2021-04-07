import { Module } from '@nestjs/common';
import { TesteThiagoService } from './teste-thiago.service';
import { TesteThiagoController } from './teste-thiago.controller';

@Module({
  controllers: [TesteThiagoController],
  providers: [TesteThiagoService]
})
export class TesteThiagoModule {}
