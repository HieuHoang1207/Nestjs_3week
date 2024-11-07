// src/bai4/example.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class ExampleService1 {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly connection1: Connection,
  ) {}

  async findData1() {
    // Truy vấn đơn giản để kiểm tra kết nối
    return await this.connection1.query('SELECT * FROM hotel_manager.users;');
  }
}
