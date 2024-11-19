// NestJS_3week/src/app.module.ts

import { Module } from '@nestjs/common';
import { ErrorTestController } from './error-test.controller';

@Module({
  imports: [],
  controllers: [ErrorTestController],
  providers: [],
})
export class AppModuleBai19 {}
