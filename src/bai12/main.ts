import { NestFactory } from '@nestjs/core';
import { DatabaseModule12 } from './database.module';

async function bootstrap() {
  const app = await NestFactory.create(DatabaseModule12);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//npx ts-node .\src\bai23\main.ts
