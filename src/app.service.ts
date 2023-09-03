import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'My name is Mirolim! Welcome to Sello shopping';
  }
}
