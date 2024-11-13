import { NestFactory } from '@nestjs/core';
import { Bai18Module } from './bai18.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(Bai18Module);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
