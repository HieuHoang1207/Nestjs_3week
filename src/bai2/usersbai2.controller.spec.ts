import { Test, TestingModule } from '@nestjs/testing';
import { Usersbai2Controller } from './usersbai2.controller';

describe('Usersbai2Controller', () => {
  let controller: Usersbai2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Usersbai2Controller],
    }).compile();

    controller = module.get<Usersbai2Controller>(Usersbai2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
