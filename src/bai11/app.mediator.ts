// src/bai11/app.mediator.ts
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable()
export class AppMediator {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,

    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  getUserRoles(userId: string) {
    return this.authService.checkPermissions(userId);
  }

  checkPermissions(userId: string) {
    const user = this.userService.getUser(userId);
    return user.roles.includes('admin');
  }
}
