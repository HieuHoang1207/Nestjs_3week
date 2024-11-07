// src/bai11/auth.service.ts
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { AppMediator } from './app.mediator';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => AppMediator))
    private readonly appMediator: AppMediator,
  ) {}

  checkPermissions(userId: string) {
    return this.appMediator.checkPermissions(userId);
  }
}
