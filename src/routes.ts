import { Routes } from 'nest-router';
import { UserModule } from './common/user/user.module';
import { AuthModule } from './common/auth/auth.module';
import { V1Module } from './versions/v1/v1.module';

export const routes: Routes = [
  {
    path: '/v1',
    children: [V1Module],
  },
];
