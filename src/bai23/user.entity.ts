import { Expose, Exclude, Transform } from 'class-transformer';

// Entity User với decorator Expose, Exclude và Transform
export class User {
  @Expose({ groups: ['admin', 'user'] }) // Expose cho cả admin và user
  id: number;

  @Expose({ groups: ['admin', 'user'] })
  name: string;

  @Exclude({ toClassOnly: true }) // Exclude password cho tất cả các nhóm (được xử lý trong @Expose)
  password: string;

  @Expose({ groups: ['admin'] }) // Expose password chỉ cho admin
  @Exclude({ toPlainOnly: true }) // Không include password khi serialize về plain object
  @Transform(({ value }) => value.toISOString(), { groups: ['admin'] }) // Format timestamp cho admin
  timestamp: Date;

  @Expose({ groups: ['user'] })
  @Transform(({ value }) => (value ? value.toUpperCase() : value), {
    groups: ['user'],
  }) // Kiểm tra trước khi gọi toUpperCase
  role: string;
}
