import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './bai2/hello.controller';
import { ProductsController } from './bai2/products.controller';
import { OrdersController } from './bai2/orders.controller';
import { MessagesController } from './bai2/messages.controller';
import { UsersModule } from './bai3/users.module';
import { Usersbai2Controller } from './bai2/usersbai2.controller';
import { UsersModuleBai4 } from './bai4/users.module';
import { DatabaseModule } from './bai4/database.module';
import { ExampleService } from './bai4/example.service';
import { ExampleController } from './bai4/example.controller';
import { ExampleModule4 } from './bai4/example.module';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [
    DatabaseModule.register({
      type: 'mysql', // Loại database, ví dụ: 'mysql' hoặc 'postgres'
      host: 'localhost', // Địa chỉ database
      port: 3306, // Cổng kết nối
      username: 'root', // Tên đăng nhập
      password: '123456', // Mật khẩu
      database: 'hotel_management', // Tên database
    }),
    UsersModule,
    UsersModuleBai4,
    ExampleModule4,
  ],
  controllers: [
    AppController,
    HelloController,
    ProductsController,
    OrdersController,
    MessagesController,
    Usersbai2Controller,
    ExampleController,
  ],
  providers: [AppService, ExampleService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // Áp dụng middleware cho tất cả routes
  }
}
