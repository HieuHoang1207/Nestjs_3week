// src/bai15/upload.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from './entities/file.entity';
import { UploadFileDto } from './dto/upload-file.dto';
import { LocalUploadStrategy } from './strategies/local-upload.strategy';
import { FTPUploadStrategy } from './strategies/ftp-upload.service';
import { UploadStrategy } from './interfaces/upload-strategy.interface';
import * as path from 'path';

@Injectable()
export class UploadService {
  private uploadStrategy: UploadStrategy;

  constructor(
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>,
  ) {}

  // Cấu hình phương thức upload
  configureUploadMethod(method: string): void {
    if (method === 'local') {
      this.uploadStrategy = new LocalUploadStrategy();
    } else if (method === 'ftp') {
      console.log('đang sử dụng ftp');
      this.uploadStrategy = new FTPUploadStrategy();
    } else {
      throw new Error('Unsupported upload method');
    }
  }

  // Trong hàm uploadFile
  async uploadFile(
    file: Express.Multer.File,
    uploadFileDto: UploadFileDto,
  ): Promise<string> {
    console.log('Uploading file:', file);

    if (!file) {
      throw new Error('No file uploaded');
    }

    console.log(uploadFileDto);
    // Sử dụng uploadStrategy đã được cấu hình
    // const filePath = await this.uploadStrategy.upload(file);
    // const filePath = path.join('uploads', file.filename);

    const method = uploadFileDto.method; // Lấy giá trị method từ uploadFileDto
    let filePath: string;

    if (method === 'local') {
      // Nếu phương thức là 'local', sử dụng local strategy
      filePath = path.join('uploads', file.filename);
    } else if (method === 'ftp') {
      // Nếu phương thức là 'ftp', sử dụng FTP strategy
      filePath = await this.uploadStrategy.upload(file);
    } else {
      throw new Error('Unsupported upload method');
    }

    // Lưu vào cơ sở dữ liệu
    const fileEntity = new FileEntity();
    fileEntity.path = filePath;
    fileEntity.uploadedAt = new Date();
    console.log(fileEntity);
    await this.fileRepository.save(fileEntity);

    return fileEntity.path;
  }
}
