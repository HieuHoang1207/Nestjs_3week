// src/bai17/dto/create-book.dto.ts
import {
  IsString,
  IsInt,
  Min,
  Max,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  title: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  author: string;

  @IsInt()
  @Min(1450) // Giả sử năm xuất bản không thể nhỏ hơn 1450
  @Max(new Date().getFullYear())
  year: number;
}
