// src/bai4/example.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  async testConnection() {
    return await this.exampleService.findData();
  }
}
