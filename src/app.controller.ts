// src/app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('data')
export class AppController {

  constructor(private readonly appService: AppService) {
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}