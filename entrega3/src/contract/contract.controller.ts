import { Controller, Post, Body } from '@nestjs/common';
import { ContractService } from './contract.service';

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  create(@Body() personAge: number) {
    return this.contractService.contractType(personAge);
  }
}
