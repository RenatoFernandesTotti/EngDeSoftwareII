import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesteRenatoModule } from './teste-renato/teste-renato.module';
import { TesteThiagoModule } from './teste-thiago/teste-thiago.module';

@Module({
  imports: [TesteRenatoModule, TesteThiagoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
