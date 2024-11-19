import { NestFactory } from '@nestjs/core';
import { AppModuleBai8 } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModuleBai8);

  // Giả lập middleware để thêm user vào request
  app.use((req, res, next) => {
    const userRole = req.headers['role']; // Hoặc req.body.role, req.query.role tùy thuộc vào cách bạn gửi dữ liệu
    req.user = { id: 1, role: userRole || 'user' }; // Mặc định là 'user' nếu không có role
    next();
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
