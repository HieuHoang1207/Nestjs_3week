import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookEntity } from './entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nestjsbai17', // Tên database của bạn
      entities: [BookEntity], // Các entity bạn muốn kết nối
      synchronize: true, // Tự động đồng bộ hóa schema mỗi khi khởi động (không khuyến khích dùng trong môi trường production)
    }),
    TypeOrmModule.forFeature([BookEntity]), // Đăng ký entity trong module
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class AppModuleBai17 {}
