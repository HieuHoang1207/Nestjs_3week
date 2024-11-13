import { IsInt } from 'class-validator';

export class GetBookParamsDto {
  @IsInt()
  id: number;
}
