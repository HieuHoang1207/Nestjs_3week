import { NestFactory } from '@nestjs/core';
import { AppModuleBai17 } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModuleBai17);
  //bai17
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Loại bỏ các thuộc tính không có trong DTO
      forbidNonWhitelisted: true, // Cấm các thuộc tính không có trong DTO
      transform: true, // Tự động chuyển đổi kiểu dữ liệu
    }),
  );
  await app.listen(3000);
}
bootstrap();
