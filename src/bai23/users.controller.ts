import {
  Controller,
  Get,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { User } from './user.entity';
import { plainToInstance } from 'class-transformer';

@Controller('users')
export class UsersController {
  @Get(':id')
  async getUser(@Req() request): Promise<User> {
    // Lấy role từ header
    const userRole = request.headers['role'] || 'user'; // Mặc định là 'user' nếu không có header 'role'

    // Giả sử bạn lấy user từ DB
    const user = new User();
    user.id = 1;
    user.name = 'John Doe';
    user.password = 'secretpassword';
    user.timestamp = new Date();
    user.role = userRole;

    // Dùng plainToInstance để serialize dữ liệu tùy theo group
    const serializedUser = plainToInstance(User, user, { groups: [userRole] });

    // Nếu role không hợp lệ, trả về lỗi 400
    if (userRole !== 'admin' && userRole !== 'user') {
      throw new HttpException('Invalid role', HttpStatus.BAD_REQUEST);
    }

    return serializedUser;
  }
}
