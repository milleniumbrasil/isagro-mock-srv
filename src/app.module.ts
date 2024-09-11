// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ErosaoController } from './erosao/erosao.controller';
import { OrganicasController } from './organicas/organicas.controller';

@Module({
  imports: [],
  controllers: [AppController, ErosaoController, OrganicasController],
  providers: [AppService],
})
export class AppModule {}
