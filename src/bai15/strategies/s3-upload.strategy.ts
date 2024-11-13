// src/bai15/strategies/s3-upload.strategy.ts

import { UploadStrategy } from '../interfaces/upload-strategy.interface';
import * as AWS from 'aws-sdk';
import { Injectable } from '@nestjs/common';

@Injectable()
export class S3UploadStrategy implements UploadStrategy {
  private s3 = new AWS.S3();

  async upload(file: Express.Multer.File): Promise<string> {
    const params = {
      Bucket: 'your-bucket-name',
      Key: file.originalname,
      Body: file.buffer,
    };

    const uploadResult = await this.s3.upload(params).promise();
    return uploadResult.Location; // Trả về URL file trên S3
  }
}
