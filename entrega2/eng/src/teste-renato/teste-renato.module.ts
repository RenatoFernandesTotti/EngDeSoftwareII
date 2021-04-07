import { Module } from '@nestjs/common';
import { TesteRenatoService } from './teste-renato.service';
import { TesteRenatoController } from './teste-renato.controller';

@Module({
  controllers: [TesteRenatoController],
  providers: [TesteRenatoService]
})
export class TesteRenatoModule {}
