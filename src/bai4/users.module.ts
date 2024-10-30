import { Module } from '@nestjs/common';
import { UsersServiceBai4 } from './users.service';
import { UsersControllerBai4 } from './users.controller';

@Module({
  controllers: [UsersControllerBai4],
  providers: [UsersServiceBai4],
  exports: [UsersServiceBai4],
})
export class UsersModuleBai4 {}
