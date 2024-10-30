// src/bai4/example.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ExampleService1 } from './example.service copy';

@Controller('example1')
export class ExampleController1 {
  constructor(private readonly exampleService: ExampleService1) {}

  @Get()
  async testConnection() {
    return await this.exampleService.findData();
  }
}
