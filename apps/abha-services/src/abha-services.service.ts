import { Injectable } from '@nestjs/common';

@Injectable()
export class AbhaServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
