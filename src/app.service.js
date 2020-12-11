import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    let name = 'tester';
    return 'Hello World!!' + name;
  }
}
