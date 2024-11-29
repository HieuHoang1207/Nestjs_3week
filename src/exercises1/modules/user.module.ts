import { Module } from '../decorators/module.decorator';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
})
export class UserModule {}
