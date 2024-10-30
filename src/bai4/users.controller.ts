import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersServiceBai4 } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('bai4users')
export class UsersControllerBai4 {
  constructor(private readonly usersServiceBai4: UsersServiceBai4) {}

  @Get()
  findAll() {
    return this.usersServiceBai4.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersServiceBai4.findOne(+id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersServiceBai4.create(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersServiceBai4.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersServiceBai4.remove(+id);
  }
}
