// src/bai9/console.logger.ts
import { ILogger } from './logger.interface';

export class ConsoleLogger implements ILogger {
  log(message: string) {
    console.log(`ConsoleLogger: ${message}`);
  }
}
