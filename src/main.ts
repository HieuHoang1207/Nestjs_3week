import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Giả lập middleware để thêm user vào request
  // app.use((req, res, next) => {
  //   req.user = { id: 1, role: 'admin' }; // Thay đổi vai trò theo nhu cầu
  //   next();
  // });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
