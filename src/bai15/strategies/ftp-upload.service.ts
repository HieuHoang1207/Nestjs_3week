// src/bai15/strategies/ftp-upload.service.ts

import { UploadStrategy } from '../interfaces/upload-strategy.interface';
import * as ftp from 'basic-ftp';
import * as path from 'path';

export class FTPUploadStrategy implements UploadStrategy {
  async upload(file: Express.Multer.File): Promise<string> {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
      // Kết nối tới server FTP với các thông tin cấu hình (thay các giá trị này bằng giá trị thật)
      await client.access({
        host: '127.0.0.1',
        user: 'user',
        password: '123456',
        secure: true, // Kích hoạt TLS
        secureOptions: {
          rejectUnauthorized: false, // Bỏ qua lỗi chứng chỉ tự ký
        },
      });

      // Đảm bảo có thư mục uploads, nếu không thì tạo mới
      const remoteDir = '/uploads'; // Đảm bảo đường dẫn này hợp lệ trên server
      console.log(remoteDir);
      console.log('den day chua2');
      await client.ensureDir(remoteDir);
      console.log('den day chua3');
      // Đường dẫn lưu file trên server FTP
      const remoteFilePath = `${remoteDir}/${file.filename}`;
      console.log('den day chua4');
      // Upload file
      await client.uploadFrom(file.path, remoteFilePath);

      console.log(`File uploaded to FTP server at: ${remoteFilePath}`);
      return remoteFilePath; // Trả về đường dẫn trên FTP server
    } catch (error) {
      console.error('FTP upload failed:', error);
      throw new Error('FTP upload failed');
    } finally {
      client.close();
    }
  }
}
