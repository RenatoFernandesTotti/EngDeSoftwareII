import { Test, TestingModule } from '@nestjs/testing';
import { ContractService } from './contract.service';

describe('ContractService', () => {
  let service: ContractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractService],
    }).compile();

    service = module.get<ContractService>(ContractService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //Caminho 1: age (32)
  it('should partial contract when you are 17', () => {
    const contract: string = service.contractType(32);
    expect(contract).toBe('full contract');
  });

  //Caminho 2: age (16)
  it('should full contract when you are 16', () => {
    const contract: string = service.contractType(16);
    expect(contract).toBe('partial contract');
  });

  //Caminho 3: age (8)
  it('should impossible to contract when you are 8', () => {
    const contract: string = service.contractType(8);
    expect(contract).toBe('impossible to contract');
  });

  //Caminho 4: age (64)
  it('should impossible to contract when you are 64', () => {
    const contract: string = service.contractType(60);
    expect(contract).toBe('impossible to contract');
  });
});
