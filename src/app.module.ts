import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Module } from './versions/v1/v1.module';
import { RouterModule } from 'nest-router';
import { routes } from './routes';
import { DatabaseModule } from './common/utils/database/database.module';

@Module({
  imports: [DatabaseModule, RouterModule.forRoutes(routes), V1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
