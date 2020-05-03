import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { HttpModule } from '../http/http.module';

@Module({
  providers: [
    TelegramService,
  ],
  exports: [
    TelegramService,
  ],
  imports: [
    HttpModule,
  ],
})
export class TelegramModule {
}
