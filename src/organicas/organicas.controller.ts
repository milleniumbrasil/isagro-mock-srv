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
		const items: IPercentualData[] = this.service.getPercentualData()

		if (Array.isArray(items)) {
			const groupedByPeriod = items.reduce(
				(acc, item: IPercentualData) => {
					const period: string = item.period

					if (!acc[period]) {
						acc[period] = 0 // Inicializa o total de área como 0 para o ano
					}

					acc[period] += item.value // Soma a área para o ano correspondente

					return acc
				},
				{} as { [period: string]: number },
			) // O acumulador contém apenas o total de área por ano

			// Mapeia para o formato da interface IPercentualData
			const result: IPercentualData[] = Object.keys(groupedByPeriod).map(
				(period) => {
					return {
						period: period, // 'period' corresponde ao ano como string
						value: groupedByPeriod[period], // 'area' é o total acumulado de áreas
					}
				},
			)

			return result // Retorna um array de objetos que seguem a interface IPercentualData
		} else {
			throw Error("Invalid data")
		}
	}
}
