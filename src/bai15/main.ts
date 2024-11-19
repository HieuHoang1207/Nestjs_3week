import { NestFactory } from '@nestjs/core';
import { AppModuleBai15 } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModuleBai15);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//npx ts-node .\src\bai15\main.ts
//trong o C:\ftp
