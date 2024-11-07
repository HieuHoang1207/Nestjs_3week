import { MigrationInterface, QueryRunner } from 'typeorm';
import { UserMongo } from '../../entities/user-mongo.entity'; // Đảm bảo import đúng entity

export class CreateUserCollection1634567890123 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    const mongoRepository = queryRunner.manager.getMongoRepository(UserMongo); // Lấy repository của entity UserMongo

    // Chèn một user mới vào collection
    await mongoRepository.insertOne({
      name: 'Doe',
      phone: '7890',
      address: 'Cityville',
      email: 'Hieu@example.com',
      password: '1234567',
    });
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    const mongoRepository = queryRunner.manager.getMongoRepository(UserMongo); // Lấy repository của entity UserMongo

    // Xóa collection user2s
    await mongoRepository.clear(); // Sử dụng clear để xóa tất cả dữ liệu trong collection
  }
}
