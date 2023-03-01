import { Controller, Get } from '@nestjs/common';
import { AbhaServicesService } from './abha-services.service';

@Controller()
export class AbhaServicesController {
  constructor(private readonly abhaServicesService: AbhaServicesService) {}

  @Get()
  getHello(): string {
    return this.abhaServicesService.getHello();
  }
}
