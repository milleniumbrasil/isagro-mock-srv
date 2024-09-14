
import { IStackedData, IPercentualData } from "../types"
import { BaseService } from "src/BaseService"
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class OrganicasService extends BaseService {

    private readonly logger = new Logger(OrganicasService.name);

	public getStackedDataValues(): IStackedData[] {
		return [
			{ period: "1990", entry: ["grão", 100] },
			{ period: "1990", entry: ["hortaliças", 150] },
			{ period: "1990", entry: ["fruticultura", 50] },
			{ period: "1990", entry: ["pastagem", 10] },

			{ period: "1990", entry: ["grão", 110] },
			{ period: "1990", entry: ["hortaliças", 160] },
			{ period: "1990", entry: ["fruticultura", 60] },
			{ period: "1990", entry: ["pastagem", 20] },

			{ period: "1991", entry: ["grão", 250] },
			{ period: "1991", entry: ["hortaliças", 350] },
			{ period: "1991", entry: ["fruticultura", 200] },
			{ period: "1991", entry: ["pastagem", 100] },

			{ period: "1992", entry: ["grão", 400] },
			{ period: "1992", entry: ["hortaliças", 500] },
			{ period: "1992", entry: ["fruticultura", 450] },
			{ period: "1992", entry: ["pastagem", 250] },

			{ period: "1992", entry: ["grão", 410] },
			{ period: "1992", entry: ["hortaliças", 510] },
			{ period: "1992", entry: ["fruticultura", 460] },
			{ period: "1992", entry: ["pastagem", 260] },

			{ period: "1993", entry: ["grão", 800] },
			{ period: "1993", entry: ["hortaliças", 750] },
			{ period: "1993", entry: ["fruticultura", 800] },
			{ period: "1993", entry: ["pastagem", 450] },

			{ period: "1994", entry: ["grão", 900] },
			{ period: "1994", entry: ["hortaliças", 900] },
			{ period: "1994", entry: ["fruticultura", 1100] },
			{ period: "1994", entry: ["pastagem", 900] },

			{ period: "1994", entry: ["grão", 910] },
			{ period: "1994", entry: ["hortaliças", 910] },
			{ period: "1994", entry: ["fruticultura", 1110] },
			{ period: "1994", entry: ["pastagem", 910] },

			{ period: "1995", entry: ["grão", 1200] },
			{ period: "1995", entry: ["hortaliças", 1300] },
			{ period: "1995", entry: ["fruticultura", 1450] },
			{ period: "1995", entry: ["pastagem", 9000] },
		]
	}

	protected reducePercentualByLabel(data: IStackedData[], label: string): IStackedData[] {
		// Filtra os dados pelo label fornecido
		const filteredByLabel: IStackedData[] = data.filter((stackedItem) => {
			return stackedItem.entry[0] === label;
		});
		this.logger.log(`filteredByLabel: ${JSON.stringify(filteredByLabel, null, 2)}`);
		// Identifica os períodos únicos
		const uniquePeriods = data.reduce((acc, current) => {
			acc.add(current.period);
			return acc;
		}, new Set());
		this.logger.log(`uniquePeriods: ${JSON.stringify(uniquePeriods, null, 2)}`);
		// Acumula os valores por período
		const amountsByPeriod: IStackedData[] = [];
		uniquePeriods.forEach((period) => {
			filteredByLabel.forEach((stackedItem) => {
				if (stackedItem.period === period) {
					const latest = amountsByPeriod.find((item) => item.period === period);
					if (latest) {
						latest.entry[1] += stackedItem.entry[1];
					} else {
						amountsByPeriod.push({
							period: stackedItem.period,
							entry: [...stackedItem.entry] // Faz uma cópia do array de entry
						});
					}
				}
			});
		});

		this.logger.log(`accumulatedByLabel: ${JSON.stringify(amountsByPeriod, null, 2)}`);
		// Calcula o total geral de todos os períodos
		const totalSum = amountsByPeriod.reduce((acc, stackedItem) => acc + stackedItem.entry[1], 0);
		// Calcula o percentual de cada período em relação ao total geral
		const percentualByLabel: IStackedData[] = amountsByPeriod.map((stackedItem) => {
			let percentual = (stackedItem.entry[1] / totalSum) * 100; // Percentual correto
			if (percentual > 1) {
				percentual = Math.round(percentual); // Arredonda para facilitar
			} else {
				percentual = parseFloat(percentual.toFixed(2)); // Ajusta para duas casas decimais
			}
			return {
				period: stackedItem.period,
				entry: [label, percentual]
			};
		});
		this.logger.log(`percentualByLabel: ${JSON.stringify(percentualByLabel, null, 2)}`);
		return percentualByLabel;
	}

	protected accumulatedByLabel(data: IStackedData[], label: string): IStackedData[] {
		const filteredByLabel: IStackedData[] = data.filter((stackedItem) => {
			return stackedItem.entry[0] === label;
		});
		const uniquePeriods = data.reduce((acc, current) => {
			acc.add(current.period);
			return acc;
		}, new Set());
		const accumulatedByLabel: IStackedData[] = [];
		uniquePeriods.forEach((period) => {
			filteredByLabel.forEach((stackedItem) => {
				if (stackedItem.period === period) {
					const latest = accumulatedByLabel.find((item) => item.period === period);
					if (latest) {
						latest.entry[1] += stackedItem.entry[1];
					} else {
						accumulatedByLabel.push({
							period: stackedItem.period,
							entry: [...stackedItem.entry] // Faz uma cópia do array de entry
						});
					}
				}
			});
		});
		return accumulatedByLabel;
	}

	protected reducePercentualByPeriod(data: IStackedData[]): IPercentualData[] {
		const percentualsByPeriod = data.reduce((acc, stackedItem) => {
			const period = stackedItem.period
			const value = stackedItem.entry.reduce((acc, curr) => acc + curr[1], 0)
			acc.push({ period, value });
			return acc;
		}, [] as IPercentualData[]);
		return percentualsByPeriod;
	}

	public getPercentualData(): IPercentualData[] {
		this.reducePercentualByLabel(this.getStackedDataValues(), "pastagem");
		const result = [
			{ period: "1990", value: 100 },
			{ period: "1990", value: 150 },
			{ period: "1990", value: 50 },
			{ period: "1990", value: 10 },
			{ period: "1991", value: 250 },
			{ period: "1991", value: 350 },
			{ period: "1991", value: 200 },
			{ period: "1991", value: 100 },
			{ period: "1992", value: 400 },
			{ period: "1992", value: 500 },
			{ period: "1992", value: 450 },
			{ period: "1992", value: 250 },
			{ period: "1993", value: 800 },
			{ period: "1993", value: 750 },
			{ period: "1993", value: 800 },
			{ period: "1993", value: 450 },
			{ period: "1994", value: 900 },
			{ period: "1994", value: 900 },
			{ period: "1994", value: 1100 },
			{ period: "1994", value: 900 },
			{ period: "1995", value: 1200 },
			{ period: "1995", value: 1300 },
			{ period: "1995", value: 1450 },
			{ period: "1995", value: 900 },
		] as IPercentualData[]
		return result
	}
}
