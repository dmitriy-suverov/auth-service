import { Entity, Column } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { BaseEntity } from '../utils/base.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  login: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  passwordHash: string;

  @Column({default: false})
  isConfirmed: boolean;

  validatePassword(password: string) {
    return bcrypt.compare(password, this.passwordHash);
  }

  getPasswordHash(password: string) {
    return bcrypt.hash(password, 10);
  }
}
