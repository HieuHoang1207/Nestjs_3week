// src/dto/query.dto.ts
import { Type } from 'class-transformer';
import { IsOptional, IsString, IsInt } from 'class-validator';

export class QueryDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id?: number;
}
