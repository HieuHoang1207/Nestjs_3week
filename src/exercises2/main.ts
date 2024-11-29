import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//npx ts-node .\src\exercises2\main.ts
//http://localhost:3000/users?offset=2&limit=5
