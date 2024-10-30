import { Controller, Get, Put } from '@nestjs/common';

@Controller('hello') // Định nghĩa route gốc cho controller này
export class HelloController {
  @Get() // Xử lý yêu cầu GET đến /hello
  getHello(): string {
    return 'Hello, World!'; // Phản hồi khi có yêu cầu
  }
  @Put()
  putHello(): string {
    return 'Hello, Put!';
  }
}
