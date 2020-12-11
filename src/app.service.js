import { Injectable } from '@nestjs/common';
import { MyFunc } from './anotherfile.js';

@Injectable()
export class AppService {
  async getHello() {
    let name = 'xxx';
    const myFunc = new MyFunc();
    name = await myFunc.getData();
    return 'Hello World!!' + name;
  }
}
