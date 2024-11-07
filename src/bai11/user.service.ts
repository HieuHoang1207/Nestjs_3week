// src/bai11/user.service.ts
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { AppMediator } from './app.mediator';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AppMediator))
    private readonly appMediator: AppMediator,
  ) {}

  getUserRoles(userId: string) {
    return this.appMediator.getUserRoles(userId);
  }

  getUser(userId: string) {
    return { id: userId, roles: ['user', 'admin'] };
  }
}
