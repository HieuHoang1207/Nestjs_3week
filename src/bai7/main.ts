import { NestFactory } from '@nestjs/core';
import { Bai7 } from './bai7.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(Bai7);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//npx ts-node .\src\bai7\main.ts
//http://localhost:3000/list?id=8
//http://localhost:3000/list?name=abc
