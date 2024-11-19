import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get('')
  throwError() {
    throw new HttpException('Custom error message', HttpStatus.BAD_REQUEST);
  }
}
