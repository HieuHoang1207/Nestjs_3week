// src/bai17/dto/update-book.dto.ts
import {
  IsString,
  IsInt,
  Min,
  Max,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  title?: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  author?: string;

  @IsOptional()
  @IsInt()
  @Min(1450)
  @Max(new Date().getFullYear())
  year?: number;
}
