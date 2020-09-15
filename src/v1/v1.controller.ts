import { Controller, Get } from '@nestjs/common';
import { V1Service } from './v1.service';

@Controller('v1')
export class V1Controller {
  constructor(private readonly appService: V1Service) {}

  @Get()
  getVersion(): string {
    return this.appService.getVersion();
  }
}
