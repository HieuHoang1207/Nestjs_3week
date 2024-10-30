import { Test, TestingModule } from '@nestjs/testing';
import { UsersControllerBai4 } from './users.controller';

describe('UsersController', () => {
  let controller: UsersControllerBai4;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersControllerBai4],
    }).compile();

    controller = module.get<UsersControllerBai4>(UsersControllerBai4);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
