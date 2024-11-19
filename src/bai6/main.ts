import { NestFactory } from '@nestjs/core';
import { I18nModule } from './i18n.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(I18nModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//npx ts-node .\src\bai6\main.ts
//Accept-Language vi
