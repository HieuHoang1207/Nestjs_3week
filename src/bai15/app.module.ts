// src\bai15\app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity'; // Đảm bảo đường dẫn đúng đến FileEntity
import { UploadModule } from './upload.module'; // Đảm bảo đường dẫn đúng đến UploadModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // hoặc loại database bạn dùng
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nestjsbai15',
      entities: [FileEntity],
      synchronize: true,
    }),
    UploadModule,
  ],
})
export class AppModuleBai15 {}
