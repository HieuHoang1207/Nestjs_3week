import { DataSource } from 'typeorm';
import { UserMongo } from './entities/user-mongo.entity'; // Đảm bảo rằng entity được import đúng

export const MySQLDataSource = new DataSource({
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'hotel_management',
  entities: [UserMongo], // Đảm bảo rằng các entity của MongoDB được định nghĩa đúng
  migrations: ['./src/bai13/migrations/mongodb/*.{ts,js}'],
  synchronize: false,
  useUnifiedTopology: true, // Thêm tùy chọn này nếu sử dụng MongoDB mới
});
//npx ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js migration:run -d .\src\bai13\data-source_mongodb.ts
//npx ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js migration:revert -d .\src\bai13\data-source_mongodb.ts
