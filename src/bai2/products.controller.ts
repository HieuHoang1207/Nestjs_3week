import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':id') // Endpoint cho yêu cầu GET đến /products/:id
  findOne(@Param('id') id: string, @Query('sort') sort: string) {
    return `This action returns product #${id} sorted by ${sort}`;
  }
}
