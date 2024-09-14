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

  @ApiOperation({ summary: "Obter dados de erosão por área" })
  @ApiResponse({
	  status: 200,
	  description: "Dados de erosão por área retornados com sucesso.",
	  type: IStackedData,
	  isArray: true,
  })
  @ApiResponse({ status: 500, description: "Erro no servidor." })
  @Get("erosao/area/stacked")
  getStackedDataErosaoAreaAgropecuaria(): IStackedData[] {
	  return [
		  { period: "1990", entry: ["culturas", 100] },
		  { period: "1990", entry: ["pastagens", 150] },

		  { period: "1991", entry: ["culturas", 250] },
		  { period: "1991", entry: ["pastagens", 350] },

		  { period: "1992", entry: ["culturas", 400] },
		  { period: "1992", entry: ["pastagens", 500] },

		  { period: "1993", entry: ["culturas", 800] },
		  { period: "1993", entry: ["pastagens", 750] },

		  { period: "1994", entry: ["culturas", 900] },
		  { period: "1994", entry: ["pastagens", 900] },

		  { period: "1995", entry: ["culturas", 1200] },
		  { period: "1995", entry: ["pastagens", 1300] },
	  ] as IStackedData[]
  }

  @ApiOperation({ summary: "Obter dados de risco de erosão em culturas" })
  @ApiResponse({
	  status: 200,
	  description:
		  "Dados de risco de erosão em culturas retornados com sucesso.",
	  type: IStackedData,
	  isArray: true,
  })
  @ApiResponse({ status: 500, description: "Erro no servidor." })
  @Get("erosao/risco/culturas/stacked")
  getStackedDataErosaoCulturas(): IStackedData[] {
	  return [
		  { period: "1990", entry: ["tolerável", 100] },
		  { period: "1990", entry: ["moderado", 150] },
		  { period: "1990", entry: ["severo", 150] },

		  { period: "1991", entry: ["tolerável", 250] },
		  { period: "1991", entry: ["moderado", 350] },
		  { period: "1991", entry: ["severo", 500] },

		  { period: "1992", entry: ["tolerável", 410] },
		  { period: "1992", entry: ["moderado", 510] },
		  { period: "1992", entry: ["severo", 1500] },

		  { period: "1993", entry: ["tolerável", 800] },
		  { period: "1993", entry: ["moderado", 750] },
		  { period: "1993", entry: ["severo", 15022] },

		  { period: "1994", entry: ["tolerável", 910] },
		  { period: "1994", entry: ["moderado", 910] },
		  { period: "1994", entry: ["severo", 1501] },

		  { period: "1995", entry: ["tolerável", 1200] },
		  { period: "1995", entry: ["moderado", 1300] },
		  { period: "1995", entry: ["severo", 150] },
	  ] as IStackedData[]
  }

  @ApiOperation({ summary: "Obter dados de risco de erosão em pastagens" })
  @ApiResponse({
	  status: 200,
	  description:
		  "Dados de risco de erosão em pastagens retornados com sucesso.",
	  type: IStackedData,
	  isArray: true,
  })
  @ApiResponse({ status: 500, description: "Erro no servidor." })
  @Get("erosao/risco/pastagens/stacked")
  getStackedDataErosaoPastagens(): IStackedData[] {
	  return [
		  { period: "1990", entry: ["tolerável", 100] },
		  { period: "1990", entry: ["moderado", 750] },
		  { period: "1990", entry: ["severo", 150] },

		  { period: "1991", entry: ["tolerável", 250] },
		  { period: "1991", entry: ["moderado", 350] },
		  { period: "1991", entry: ["severo", 300] },

		  { period: "1992", entry: ["tolerável", 410] },
		  { period: "1992", entry: ["moderado", 510] },
		  { period: "1992", entry: ["severo", 1000] },

		  { period: "1993", entry: ["tolerável", 800] },
		  { period: "1993", entry: ["moderado", 450] },
		  { period: "1993", entry: ["severo", 1022] },

		  { period: "1994", entry: ["tolerável", 910] },
		  { period: "1994", entry: ["moderado", 910] },
		  { period: "1994", entry: ["severo", 150] },

		  { period: "1995", entry: ["tolerável", 1200] },
		  { period: "1995", entry: ["moderado", 1100] },
		  { period: "1995", entry: ["severo", 350] },
	  ] as IStackedData[]
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
