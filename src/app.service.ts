import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const sayHello = 'Hello World!';
    console.log(sayHello);
    return sayHello;
  }
}
