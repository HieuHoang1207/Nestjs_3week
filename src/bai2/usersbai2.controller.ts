import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
} from '@nestjs/common';

@Controller('usersbai2')
export class Usersbai2Controller {
  @Get() // Xử lý yêu cầu GET đến /users
  findAll() {
    return 'This action returns all users';
  }

  @Post() // Xử lý yêu cầu POST đến /users
  create() {
    return 'This action creates a user';
  }

  @Put(':id') // Xử lý yêu cầu PUT đến /users/:id
  update(@Param('id') id: string) {
    return `This action updates user #${id}`;
  }

  @Delete(':id') // Xử lý yêu cầu DELETE đến /users/:id
  remove(@Param('id') id: string) {
    return `This action removes user #${id}`;
  }
}
