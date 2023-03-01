import { Controller, Get } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({summary: 'Greet hello', tags: ['Server check']})
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 404, description: 'Not found'})
  // @ApiBody({type: })
  getHello(): string {
    return this.appService.getHello();
  }
}
