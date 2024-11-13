import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  // Lưu dữ liệu vào cache
  async setCache(key: string, value: any, ttl: number = 60): Promise<void> {
    await this.cacheManager.set(key, value, 3600); // TTL = 1 giờ

    console.log(`Cache set for key: ${key} with value: ${value}`); // Log để kiểm tra
  }

  // Lấy dữ liệu từ cache
  async getCache(key: string): Promise<any> {
    const cachedValue = await this.cacheManager.get(key);
    if (!cachedValue) {
      console.log(`No cache found for key: ${key}`); // Log khi không tìm thấy cache
    }
    return cachedValue;
  }

  // Xóa cache theo key
  async delCache(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }
}
