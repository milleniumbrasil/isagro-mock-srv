// src/app.module.ts

import { Module } from "@nestjs/common"
import { ErosaoController } from "./erosao/erosao.controller"
import { OrganicasController } from "./organicas/organicas.controller"
import { ErosaoService } from "./erosao/erosao.service"
import { NPKController } from "./npk/npk.controller"
import { GEEController } from "./gee/gee.controller"
import { NH3Controller } from "./nh3/nh3.controller"
import { PoluicaoController } from "./poluicao/poluicao.controller"
import { NPKService } from "./npk/npk.service"
import { GEEService } from "./gee/gee.service"
import { NH3Service } from "./nh3/nh3.service"
import { PoluicaoService } from "./poluicao/poluicao.service"
import { OrganicasService } from "./organicas/organicas.service"
import { PesticitasController } from "./pesticidas/pesticidas.controller"
import { PesticitasService } from "./pesticidas/pesticidas.service"

@Module({
	imports: [],
	controllers: [
		ErosaoController,
		GEEController,
		NPKController,
		GEEController,
		NH3Controller,
		PesticitasController,
		PoluicaoController,
		OrganicasController,
	],
	providers: [
		ErosaoService,
		GEEService,
		NPKService,
		GEEService,
		NH3Service,
		PesticitasService,
		PoluicaoService,
		OrganicasService,
	],
})
export class AppModule {}
