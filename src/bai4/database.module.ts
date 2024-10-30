// src/bai4/database.module.ts
import { DynamicModule, Module } from '@nestjs/common';
import { createConnection, Connection } from 'typeorm';

@Module({})
export class DatabaseModule {
  static register(options: {
    type: 'mysql' | 'postgres';
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  }): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'DATABASE_CONNECTION',
          useFactory: async (): Promise<Connection> => {
            const connection = await createConnection({
              type: options.type,
              host: options.host,
              port: options.port,
              username: options.username,
              password: options.password,
              database: options.database,
            });
            return connection;
          },
        },
      ],
      exports: ['DATABASE_CONNECTION'],
    };
  }
}
