import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getPort(): string {
    console.log(this.configService.get<string>('PORT'));
    return this.configService.get<string>('PORT'); // Lấy giá trị từ biến môi trường
  }
}
