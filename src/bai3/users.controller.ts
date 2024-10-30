// src/user/user.controller.ts
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersServiceBai4 } from '../bai4/users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly usersServiceBai4: UsersServiceBai4,
  ) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersServiceBai4.remove(+id);
  }
}
