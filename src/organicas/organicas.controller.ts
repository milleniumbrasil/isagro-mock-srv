import { BadRequestException, Controller, Get, Param } from "@nestjs/common"
import { OrganicasService } from "./organicas.service"
import { IPercentualData, IStackedData } from "../types"
import { BaseController } from "../BaseController"
import { ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger"

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

	@ApiOperation({ summary: "Obter dados percentuais de orgânicas por label" })
	@ApiParam({
		name: 'label',
		required: true,
		description: 'O label para o qual os percentuais devem ser retornados. Opções: pastagem, grão, fruticultura, hortaliças',
		example: 'hortaliças',
		enum: ['pastagem', 'grão', 'fruticultura', 'hortaliças'], // Define as opções disponíveis no Swagger
	})
	@ApiResponse({
		status: 200,
		description: "Dados percentuais de orgânicas por label retornados com sucesso.",
		type: IPercentualData,
		isArray: true,
	})
	@ApiResponse({ status: 400, description: "Label inválido." })
	@ApiResponse({ status: 500, description: "Erro no servidor." })
	@Get("percentual/:label")
	getPercentualByLabel(@Param('label') label: string): IPercentualData[] {
		const validLabels = ['pastagem', 'grão', 'fruticultura', 'hortaliças'];

		if (!validLabels.includes(label)) {
			throw new BadRequestException(`Label inválido. As opções válidas são: ${validLabels.join(', ')}`);
		}

		return this.service.getPercentualDataByLabel(label);
	}

	@ApiOperation({ summary: "Obter numeros absolutos de orgânicas por label" })
	@ApiParam({
		name: 'label',
		required: true,
		description: 'O label para o qual os dados devem ser retornados. Opções: pastagem, grão, fruticultura, hortaliças',
		example: 'hortaliças',
		enum: ['pastagem', 'grão', 'fruticultura', 'hortaliças'], // Define as opções disponíveis no Swagger
	})
	@ApiResponse({
		status: 200,
		description: "Dados absolutos de orgânicas por label retornados com sucesso.",
		type: IPercentualData,
		isArray: true,
	})
	@ApiResponse({ status: 400, description: "Label inválido." })
	@ApiResponse({ status: 500, description: "Erro no servidor." })
	@Get(":label")
	getDataByLabel(@Param('label') label: string): IPercentualData[] {
		const validLabels = ['pastagem', 'grão', 'fruticultura', 'hortaliças'];

		if (!validLabels.includes(label)) {
			throw new BadRequestException(`Label inválido. As opções válidas são: ${validLabels.join(', ')}`);
		}

		return this.service.getPercentualDataByLabel(label);
	}
}
