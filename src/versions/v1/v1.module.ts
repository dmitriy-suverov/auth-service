import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { UserModule } from 'src/common/user/user.module';
import { AuthModule } from 'src/common/auth/auth.module';

@Module({
  controllers: [UsersController, AuthController],
  imports: [UserModule, AuthModule],
})
export class V1Module {}
