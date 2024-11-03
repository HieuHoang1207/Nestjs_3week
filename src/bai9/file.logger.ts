// src/bai9/file.logger.ts
import { ILogger } from './logger.interface';

export class FileLogger implements ILogger {
  log(message: string) {
    console.log(`FileLogger: ${message}`);
  }
}
