import { NestFactory } from '@nestjs/core';
import { AppModuleBai16 } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModuleBai16);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT'); // Lấy cổng từ biến môi trường
  console.log(port);
  await app.listen(port);
}
bootstrap();
//cross-env NODE_ENV=local ts-node src/bai16/main.ts
//cross-env NODE_ENV=dev ts-node src/bai16/main.ts
