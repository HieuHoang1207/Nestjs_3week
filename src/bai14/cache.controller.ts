import { Controller, Get, Param, Post } from '@nestjs/common';
import { CacheService } from './cache.service';

@Controller('cache')
export class CacheController {
  constructor(private readonly cacheService: CacheService) {}

  @Post(':key/:value')
  async setCache(
    @Param('key') key: string,
    @Param('value') value: string,
  ): Promise<string> {
    await this.cacheService.setCache(key, value);
    return `Cache set for key: ${key} with value: ${value}`;
  }

  @Get(':key')
  async getCache(@Param('key') key: string): Promise<any> {
    const cachedValue = await this.cacheService.getCache(key);
    return cachedValue ? cachedValue : `No cache found for key: ${key}`;
  }
}
