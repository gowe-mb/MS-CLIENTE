import { Injectable } from '@nestjs/common';

@Injectable()
export class V1Service {
  getVersion(): string {
    return 'Hello, you are version 1!';
  }
}
