import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  contractType(age: number): string {
    if (age >= 16 && age < 18) {
      return 'partial contract';
    }
    if (age >= 18 && age <= 55) {
      return 'full contract';
    }
    return 'impossible to contract';
  }
}
