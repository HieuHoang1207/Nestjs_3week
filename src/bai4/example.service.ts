// src/bai4/example.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class ExampleService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly connection: Connection,
  ) {}

  async findData() {
    // Truy vấn đơn giản để kiểm tra kết nối
    return await this.connection.query('SELECT * FROM hotel_management.users;');
  }
}
