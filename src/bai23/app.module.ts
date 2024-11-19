// src/app.module.ts
import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
