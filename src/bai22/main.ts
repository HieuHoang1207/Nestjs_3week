import { NestFactory } from '@nestjs/core';
import { TaskModule } from './task.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(TaskModule);
  // });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//npx ts-node .\src\bai22\main.ts
