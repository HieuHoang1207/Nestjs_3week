// src/bai9/app.module.ts
import { Module } from '@nestjs/common';
import { ConsoleLogger } from './console.logger';
import { FileLogger } from './file.logger';
import { ILogger } from './logger.interface';

const LoggerProvider = {
  provide: 'LoggerService',
  useFactory: (isProduction: boolean): ILogger => {
    return isProduction ? new FileLogger() : new ConsoleLogger();
  },
  inject: ['IS_PRODUCTION'],
};

@Module({
  providers: [
    LoggerProvider,
    {
      provide: 'IS_PRODUCTION',
      useValue: process.env.NODE_ENV === 'production',
    },
  ],
  exports: ['LoggerService'],
})
export class AppModule {}
