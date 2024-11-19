import { NestFactory } from '@nestjs/core';
import { Bai18Module } from './bai18.module';

async function bootstrap() {
  const app = await NestFactory.create(Bai18Module);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//npx ts-node .\src\bai18\main.ts
//npx ts-node .\src\bai18\socket.io-client.ts
