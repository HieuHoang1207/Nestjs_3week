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
  @UsePipes(new ValidationPipe({ transform: true })) // Áp dụng ValidationPipe
  getList(@Query() query: QueryDto) {
    return { message: 'Query data', query };
  }
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return { message: 'User ID', id };
  }
}
