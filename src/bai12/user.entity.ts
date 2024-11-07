// src/bai12/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Tên bảng trong cơ sở dữ liệu
export class User {
  @PrimaryGeneratedColumn()
  id: number; // Cột id, kiểu int, tự động tăng (AI), khóa chính (PK)

  @Column({ type: 'varchar', length: 255 })
  name: string; // Cột name, kiểu varchar(255)

  @Column({ type: 'varchar', length: 15 })
  phone: string; // Cột phone, kiểu varchar(15)

  @Column({ type: 'varchar', length: 255 })
  address: string; // Cột address, kiểu varchar(255)

  @Column({ type: 'varchar', length: 255 })
  email: string; // Cột email, kiểu varchar(255)

  @Column({ type: 'varchar', length: 255 })
  password: string; // Cột password, kiểu varchar(255)
}
