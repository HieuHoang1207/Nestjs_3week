import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Để có thể truy cập biến môi trường toàn cục
      envFilePath: `.env.${process.env.NODE_ENV || 'local'}`, // Đọc file .env theo môi trường
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModuleBai16 {}
