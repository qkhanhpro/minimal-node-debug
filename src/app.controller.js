import { AppService } from './app.service';
import { Controller, Dependencies, Get } from '@nestjs/common';

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get()
  async getHello() {
    return await this.appService.getHello();
  }
}
