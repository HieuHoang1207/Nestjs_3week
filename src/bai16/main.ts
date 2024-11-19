import { NestFactory } from '@nestjs/core';
import { AppModuleBai16 } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModuleBai16);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT'); // Lấy cổng từ biến môi trường
  console.log('http://localhost:' + port);
  await app.listen(port);
}
bootstrap();
//npm run start:local
//npm run start:devtest
