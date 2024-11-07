import { DataSource } from 'typeorm';
import { Hotel } from './entities/hotel.entity'; // Giả sử bạn có entity Hotel

export const MySQLDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'hotel_management',
  entities: [Hotel], // Cấu hình các entities của bạn ở đây
  migrations: ['./src/bai13/migrations/mysql/*.{ts,js}'], // Đảm bảo rằng các file migration được định nghĩa đúng
  synchronize: false,
  logging: true,
});
//npx ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js migration:run -d ./src/bai13/data-source.ts
//npx ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js migration:revert -d ./src/bai13/data-source.ts
