// src/bai15/strategies/local-upload.strategy.ts

import { UploadStrategy } from '../interfaces/upload-strategy.interface';
import * as path from 'path';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalUploadStrategy implements UploadStrategy {
  async upload(file: Express.Multer.File): Promise<string> {
    // Kiểm tra xem file và buffer có hợp lệ không
    if (!file) {
      throw new Error('No file provided');
    }

    // Tạo đường dẫn lưu file đúng cách
    const uploadPath = path.join(__dirname, '../../uploads', file.filename);

    // Kiểm tra thư mục đã tồn tại chưa, nếu chưa thì tạo mới
    const dir = path.dirname(uploadPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Lưu file vào thư mục uploads
    fs.writeFileSync(uploadPath, file.buffer);

    return uploadPath;
  }
}
