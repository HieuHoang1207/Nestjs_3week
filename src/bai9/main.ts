// // src/bai9/main.ts
process.env.NODE_ENV = 'development';
// process.env.NODE_ENV = 'production';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ILogger } from './logger.interface';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const logger = app.get<ILogger>('LoggerService');
  logger.log('This is a test log message.');
  await app.close();
}

bootstrap();
