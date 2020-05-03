import { HttpService } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { of } from 'rxjs';
import { ConfigService } from '../../config/config.service';

describe('TelegramService', () => {
  let configService: ConfigService;
  let httpService: HttpService;
  let telegramService: TelegramService;

  const chatId = '@test_chat';
  const botToken = 'token';
  const message = 'test message';

  beforeEach(() => {
    configService = new ConfigService();
    httpService = new HttpService();
    telegramService = new TelegramService(configService, httpService);

    jest.spyOn(httpService, 'get').mockReturnValue(of(null));
    jest.spyOn(configService, 'getValue').mockImplementation((key: string) => {
      switch (key) {
        case 'TELEGRAM_CHAT_ID':
          return chatId;
        case 'TELEGRAM_BOT_TOKEN':
          return botToken;
        case 'TELEGRAM_HTTP_PROXY':
          return '';
      }
    });
  });

  describe('sendMessage', () => {
    it('should send message to telegram chat (chatId from config)', async () => {
      const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=markdown`;
      await telegramService.sendMessage(message);

      expect(configService.getValue).toBeCalledTimes(3);
      expect(configService.getValue).toBeCalledWith('TELEGRAM_BOT_TOKEN');
      expect(configService.getValue).toBeCalledWith('TELEGRAM_CHAT_ID');
      expect(configService.getValue).toBeCalledWith('TELEGRAM_HTTP_PROXY');
      expect(httpService.get).toBeCalledWith(url, {});
    });

    it('should send message to telegram chat (chatId from argument)', async () => {
      const anotherChatId = '@newChat';
      const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${anotherChatId}&text=${message}&parse_mode=markdown`;

      await telegramService.sendMessage('test message', anotherChatId);
      expect(configService.getValue).toBeCalledTimes(2);
      expect(configService.getValue).toBeCalledWith('TELEGRAM_BOT_TOKEN');
      expect(configService.getValue).toBeCalledWith('TELEGRAM_HTTP_PROXY');
      expect(httpService.get).toBeCalledWith(url, {});
    });
  });
});
