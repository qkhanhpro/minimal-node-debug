import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [
  ],
  providers: [AppService],
})
export class AppModule {

}
