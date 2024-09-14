import { Controller, Get } from "@nestjs/common"
import { OrganicasService } from "./organicas.service"
import { IPercentualData, IStackedData } from "../types"
import { BaseController } from "../BaseController"
import { ApiOperation, ApiResponse } from "@nestjs/swagger"

@Controller("organicas")
export class OrganicasController extends BaseController<OrganicasService> {
	constructor(service: OrganicasService) {
		super(service)
	}

	protected getServiceStackedData(): IStackedData[] {
		return this.service.getStackedData()
	}

	@ApiOperation({ summary: "Obter dados empilhados de orgânicas" })
	@ApiResponse({
		status: 200,
		description: "Dados empilhados de orgânicas retornados com sucesso.",
		type: IStackedData,
		isArray: true,
	})
	@ApiResponse({ status: 500, description: "Erro no servidor." })
	@Get("stacked")
	getStackedDataOrganicas(): IStackedData[] {
		return this.service.getStackedDataValues()
	}

	@ApiOperation({ summary: "Obter dados percentuais de orgânicas" })
	@ApiResponse({
		status: 200,
		description: "Dados percentuais de orgânicas retornados com sucesso.",
		type: IPercentualData,
		isArray: true,
	})
	@ApiResponse({ status: 500, description: "Erro no servidor." })
	@Get("percentual")
	getOrganicasAsPercentual(): IPercentualData[] {
		return this.service.getPercentualDataByPeriod();
	}
}
