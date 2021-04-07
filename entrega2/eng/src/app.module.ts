import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesteRenatoModule } from './teste-renato/teste-renato.module';

@Module({
  imports: [TesteRenatoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
