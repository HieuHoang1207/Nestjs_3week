import { Module } from '@nestjs/common';
import { Bai7Controller } from './bai7.controller';

@Module({
  controllers: [Bai7Controller],
})
export class Bai7 {}
