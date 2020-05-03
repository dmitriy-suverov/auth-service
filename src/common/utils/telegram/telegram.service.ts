import { Injectable, HttpService, NotImplementedException } from '@nestjs/common';
import * as SocksProxyAgent from 'socks-proxy-agent';
import { ConfigService } from '../../config/config.service';

@Injectable()
export class TelegramService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) { }

  async sendMessage(message: string, chatId?: string) {
    throw new NotImplementedException();
    // const botToken = this.configService.getValue('TELEGRAM_BOT_TOKEN');
    // chatId = chatId || this.configService.getValue('TELEGRAM_CHAT_ID');
    // const proxy = this.configService.getValue('TELEGRAM_HTTP_PROXY');
    // const options = !proxy ? {} : {
    //   httpsAgent: new SocksProxyAgent(proxy),
    // };
    // const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=markdown`;
    // return this.httpService.get(url, options).toPromise();
  }
}
