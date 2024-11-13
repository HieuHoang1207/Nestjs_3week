// src/bai15/interfaces/upload-strategy.interface.ts

export interface UploadStrategy {
  upload(file: Express.Multer.File): Promise<string>;
}
