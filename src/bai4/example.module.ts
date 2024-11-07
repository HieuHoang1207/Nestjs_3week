import { Module } from '@nestjs/common';
import { ExampleService1 } from '../bai4/example.service copy';
import { ExampleController1 } from './example.controller copy';
import { DatabaseModule } from '../bai4/database.module';

@Module({
  imports: [
    DatabaseModule.register({
      type: 'mysql', // Loại database, ví dụ: 'mysql' hoặc 'postgres'
      host: 'localhost', // Địa chỉ database
      port: 3306, // Cổng kết nối
      username: 'root', // Tên đăng nhập
      password: '123456', // Mật khẩu
      database: 'hotel_manager', // Tên database
    }),
  ],
  controllers: [ExampleController1],
  providers: [ExampleService1],
})
export class ExampleModule4 {}
