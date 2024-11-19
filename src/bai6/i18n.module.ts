import { Module } from '@nestjs/common';
import { I18nModule as NestI18nModule } from 'nestjs-i18n';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { TestController } from './test.controller';
import { APP_FILTER } from '@nestjs/core';
import * as path from 'path';

@Module({
  imports: [
    NestI18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '../../src/bai6/i18n/'),
        watch: true,
      },
    }),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
  controllers: [TestController],
})
export class I18nModule {}
