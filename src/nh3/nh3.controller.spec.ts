import { Test, TestingModule } from '@nestjs/testing';
import { NH3Controller } from './nh3.controller';

describe('ErosaoController', () => {
  let controller: NH3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NH3Controller],
    }).compile();

    controller = module.get<NH3Controller>(NH3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
