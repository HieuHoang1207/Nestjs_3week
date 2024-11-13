import { Module } from '@nestjs/common';
import { CacheModule } from './cache.module';
import { CacheController } from './cache.controller';
import { CacheService } from './cache.service';

@Module({
  imports: [CacheModule],
  controllers: [CacheController],
  providers: [CacheService],
})
export class AppModuleBai14 {}
