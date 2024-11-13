import { Module } from '@nestjs/common';
import { CacheModule as NestCacheModule } from '@nestjs/cache-manager';
import * as cacheManager from 'cache-manager';

@Module({
  imports: [
    NestCacheModule.register({
      store: 'memory', // Hoặc bạn có thể dùng Redis, tùy chọn
      max: 100,
      ttl: 60,
    }),
  ],
  exports: [NestCacheModule],
})
export class CacheModule {}
