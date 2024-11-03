// src/bai8/app.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@Controller('app')
export class AppController {
  @Get('admin')
  @Roles('admin') // Sử dụng custom decorator
  @UseGuards(RolesGuard) // Sử dụng guard kiểm tra vai trò
  getAdminData() {
    return 'Admin data';
  }
}
