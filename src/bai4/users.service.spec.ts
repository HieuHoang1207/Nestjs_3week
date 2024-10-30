import { Test, TestingModule } from '@nestjs/testing';
import { UsersServiceBai4 } from './users.service';

describe('UsersService', () => {
  let service: UsersServiceBai4;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersServiceBai4],
    }).compile();

    service = module.get<UsersServiceBai4>(UsersServiceBai4);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
