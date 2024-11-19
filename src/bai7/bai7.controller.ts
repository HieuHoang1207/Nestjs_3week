// src/app.controller.ts
import {
  Controller,
  Get,
  Query,
  Param,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QueryDto } from './dto/query.dto';

@Controller()
export class Bai7Controller {
  @Get('/list')
  //đảm bảo nó phù hợp với QueryDto
  @UsePipes(new ValidationPipe({ transform: true })) // Áp dụng ValidationPipe
  getList(@Query() query: QueryDto) {
    return { message: 'Query data', query };
  }
  @Get('/:id')
  //đảm bảo 1 số nguên
  getById(@Param('id', ParseIntPipe) id: number) {
    return { message: 'User ID', id };
  }
}
