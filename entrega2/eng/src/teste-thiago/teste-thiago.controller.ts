import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TesteThiagoService } from './teste-thiago.service';
import { CreateTesteThiagoDto } from './dto/create-teste-thiago.dto';
import { UpdateTesteThiagoDto } from './dto/update-teste-thiago.dto';

@Controller('teste-thiago')
export class TesteThiagoController {
  constructor(private readonly testeThiagoService: TesteThiagoService) {}

  @Post()
  create(@Body() createTesteThiagoDto: CreateTesteThiagoDto) {
    return this.testeThiagoService.create(createTesteThiagoDto);
  }

  @Get()
  findAll() {
    return this.testeThiagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testeThiagoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTesteThiagoDto: UpdateTesteThiagoDto) {
    return this.testeThiagoService.update(+id, updateTesteThiagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testeThiagoService.remove(+id);
  }
}
