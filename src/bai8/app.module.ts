// src/bai8/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RolesGuard } from './roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [AppController],
  //   providers: [
  //     {
  //       provide: APP_GUARD,
  //       useClass: RolesGuard,
  //     },
  //   ],
})
export class AppModuleBai8 {}
