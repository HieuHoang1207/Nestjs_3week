// src/bai15/upload.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { FileEntity } from './entities/file.entity';
import { LocalUploadStrategy } from './strategies/local-upload.strategy';
import { FTPUploadStrategy } from './strategies/ftp-upload.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([FileEntity]),
    MulterModule.register({
      dest: './uploads', // Đảm bảo thư mục này có sẵn trong project của bạn
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService, LocalUploadStrategy, FTPUploadStrategy],
})
export class UploadModule {}
