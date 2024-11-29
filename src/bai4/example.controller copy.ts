// src/bai4/example.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ExampleService1 } from './example.service copy';

@Controller('example1')
export class ExampleController1 {
  constructor(private readonly exampleService1: ExampleService1) {}

  @Get(':id')
  async testConnection1() {
    return await this.exampleService1.findData1();
  }
}
//http://localhost:3000/example1/1
