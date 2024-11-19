import { NestFactory } from '@nestjs/core';
import { AppModuleBai19 } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModuleBai19);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//npx ts-node .\src\bai19\main.ts
