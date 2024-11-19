import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity'; // Đảm bảo đường dẫn đúng
import { UserService } from './user.service'; // Đảm bảo đường dẫn đúng
import { UserController } from './user.controller'; // Đảm bảo đường dẫn đúng

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456', // Mật khẩu của bạn
      database: 'hotel_management',
      entities: [User], // Sử dụng User entity
      synchronize: true, // Chỉ dùng cho môi trường phát triển
    }),
    TypeOrmModule.forFeature([User]), // Cung cấp User repository
  ],
  providers: [UserService], // Đảm bảo UserService được khai báo
  controllers: [UserController], // Đảm bảo UserController được khai báo
})
export class DatabaseModule12 {}
