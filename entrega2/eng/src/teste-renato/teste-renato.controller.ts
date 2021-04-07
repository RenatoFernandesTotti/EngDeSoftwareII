import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TesteRenatoService } from './teste-renato.service';
import { CreateTesteRenatoDto } from './dto/create-teste-renato.dto';
import { UpdateTesteRenatoDto } from './dto/update-teste-renato.dto';

@Controller('teste-renato')
export class TesteRenatoController {
  constructor(private readonly testeRenatoService: TesteRenatoService) {}

  @Post()
  create(@Body() createTesteRenatoDto: CreateTesteRenatoDto) {
    return this.testeRenatoService.create(createTesteRenatoDto);
  }

  @Get()
  findAll() {
    return this.testeRenatoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testeRenatoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTesteRenatoDto: UpdateTesteRenatoDto) {
    return this.testeRenatoService.update(+id, updateTesteRenatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testeRenatoService.remove(+id);
  }
}
