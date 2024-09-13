import { Controller, Get } from "@nestjs/common"
import { ApiOperation, ApiResponse } from "@nestjs/swagger"
import { ErosaoService } from "./erosao.service"
import { IPercentualData, IStackedData } from "../types";
import { BaseController } from "../BaseController";

@Controller("erosao")
export class ErosaoController extends BaseController<ErosaoService> {

  constructor(service: ErosaoService) {
    super(service);
  }

  protected getServiceStackedData(): IStackedData[] {
    return this.service.getStackedData();
  }

	@ApiOperation({ summary: "Obter dados percentuais de erosão por área" })
	@ApiResponse({
		status: 200,
		description:
			"Dados percentuais de erosão por área retornados com sucesso.",
		type: IPercentualData,
		isArray: true,
	})
	@ApiResponse({ status: 500, description: "Erro no servidor." })
	@Get("erosao/percentual")
	getErosaoAsPercentual(): IPercentualData[] {
		const items: IPercentualData[] =
			this.service.getPercentualErosaoAreaData()

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

	@ApiOperation({
		summary: "Obter dados percentuais de risco de erosão em culturas",
	})
	@ApiResponse({
		status: 200,
		description:
			"Dados percentuais de risco de erosão em culturas retornados com sucesso.",
		type: IPercentualData,
		isArray: true,
	})
	@ApiResponse({ status: 500, description: "Erro no servidor." })
	@Get("erosao/culturas/percentual")
	getErosaoRiscoCultusAsPercentual(): IPercentualData[] {
		const items: IPercentualData[] =
			this.service.getPercentualErosaoRiscoCulturasData()

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

	@ApiOperation({
		summary: "Obter dados percentuais de risco de erosão em pastagens",
	})
	@ApiResponse({
		status: 200,
		description:
			"Dados percentuais de risco de erosão em pastagens retornados com sucesso.",
		type: IPercentualData,
		isArray: true,
	})
	@ApiResponse({ status: 500, description: "Erro no servidor." })
	@Get("erosao/pastagens/percentual")
	getErosaoRiscoPastagensAsPercentual(): IPercentualData[] {
		const items: IPercentualData[] =
			this.service.getPercentualErosaoRiscoPastagensData()

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
