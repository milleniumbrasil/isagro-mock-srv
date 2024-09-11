// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ErosaoController } from './erosao/erosao.controller';
import { OrganicasController } from './organicas/organicas.controller';
import { ErosaoService } from './erosao/erosao.service';
import { NPKController } from './npk/npk.controller';
import { GEEController } from './gee/gee.controller';
import { NH3Controller } from './nh3/nh3.controller';
import { PoluicaoController } from './poluicao/poluicao.controller';
import { NPKService } from './npk/npk.service';
import { GEEService } from './gee/gee.service';
import { NH3Service } from './nh3/nh3.service';
import { PoluicaoService } from './poluicao/poluicao.service';
import { OrganicasService } from './organicas/organicas.service';

@Module({
  imports: [],
  controllers: [ErosaoController, OrganicasController, NPKController, GEEController, NH3Controller, PoluicaoController],
  providers: [AppService, ErosaoService, NPKService, GEEService, NH3Service, PoluicaoService, OrganicasService],
})
export class AppModule {}
