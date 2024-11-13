import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('port')
  getPort(): string {
    return `The app is running on port: ${this.appService.getPort()}`;
  }
}
