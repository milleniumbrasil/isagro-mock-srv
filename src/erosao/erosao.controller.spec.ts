import { Test, TestingModule } from '@nestjs/testing';
import { ErosaoController } from './erosao.controller';

describe('ErosaoController', () => {
  let controller: ErosaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ErosaoController],
    }).compile();

    controller = module.get<ErosaoController>(ErosaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
