import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get() // Xử lý yêu cầu GET đến /orders
  @HttpCode(HttpStatus.OK) // Chỉ định mã trạng thái 200 OK
  findAll() {
    return 'This action returns all orders';
  }

  @Get('error') // Xử lý yêu cầu GET đến /orders/error
  @HttpCode(HttpStatus.NOT_FOUND) // Chỉ định mã trạng thái 404 Not Found
  throwError() {
    return 'This action throws an error';
  }
}
