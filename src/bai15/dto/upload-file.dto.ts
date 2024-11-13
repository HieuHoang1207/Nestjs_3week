// src/bai15/dto/upload-file.dto.ts

export class UploadFileDto {
  readonly fileName: string;
  readonly description?: string;
  readonly method?: string;
}
