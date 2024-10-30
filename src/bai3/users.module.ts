// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersModuleBai4 } from '../bai4/users.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [UsersModuleBai4],
})
export class UsersModule {}
