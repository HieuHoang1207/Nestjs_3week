// src/bai11/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserService } from './user.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userService = app.get(UserService);

  // Test lấy quyền người dùng
  const userRoles = userService.getUserRoles('123');
  console.log('User Roles:', userRoles ? 'Admin' : 'User');

  await app.close();
}
bootstrap();
