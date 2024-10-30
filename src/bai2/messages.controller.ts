import { Controller, Get, Headers } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get() // Xử lý yêu cầu GET đến /messages
  getMessages(@Headers('authorization') authHeader: string) {
    return `This action returns messages for user with token: ${authHeader}`;
  }
}
