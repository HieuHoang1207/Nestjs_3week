// src/bai17/dto/get-books.query.dto.ts
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class GetBooksQueryDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsString()
  title?: string;
}
