// src\bai15\upload.controller.ts
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { UploadFileDto } from './dto/upload-file.dto';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('myfile'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() uploadFileDto: UploadFileDto, // Truyền DTO
  ) {
    if (!file) {
      throw new Error('No file uploaded');
    }

    this.uploadService.configureUploadMethod(uploadFileDto.method || 'local');

    // Truyền đủ cả `file` và `uploadFileDto` khi gọi service
    return this.uploadService.uploadFile(file, uploadFileDto);
  }
}
