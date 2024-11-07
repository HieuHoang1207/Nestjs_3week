// src/bai11/app.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AppMediator } from './app.mediator';

@Module({
  providers: [UserService, AuthService, AppMediator],
  exports: [UserService, AuthService, AppMediator],
})
export class AppModule {}
