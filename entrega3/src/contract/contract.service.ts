import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';

@Injectable()
export class ContractService {
  contractType(age: number): string {
    if (age >= 16 && age <= 55) {
      if (age >= 18) {
        return 'full contract';
      } else {
        return 'partial contract';
      }
    }
    return 'impossible to contract';
  }
}
