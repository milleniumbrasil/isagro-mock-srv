import { Injectable, Logger } from "@nestjs/common"
import { IPercentualData, IStackedData } from "./types"

@Injectable()
export abstract class BaseService {
	private readonly baseLogger = new Logger(BaseService.name)
	// Método genérico que deve ser implementado nas subclasses para fornecer os dados
	protected abstract getStackedDataValues(): IStackedData[]

	// Método comum para todos os serviços
	public getStackedData(): IStackedData[] {
		return this.getStackedDataValues()
	}

	protected toPercentualData(data: IStackedData[]): IPercentualData[] {
		return data.map(item => ({
			period: item.period,      // Copia o período diretamente
			value: item.entry[1]      // Transforma o segundo valor do array `entry` no `value`
		}));
	}

	protected reducePercentualByLabel(
		data: IStackedData[],
		label: string,
	): IStackedData[] {
		// Filtra os dados pelo label fornecido
		const filteredByLabel: IStackedData[] = data.filter((stackedItem) => {
			return stackedItem.entry[0] === label
		})
		this.baseLogger.log(
			`filteredByLabel: ${JSON.stringify(filteredByLabel, null, 2)}`,
		)
		// Identifica os períodos únicos
		const uniquePeriods = data.reduce((acc, current) => {
			acc.add(current.period)
			return acc
		}, new Set())
		this.baseLogger.log(
			`uniquePeriods: ${JSON.stringify(uniquePeriods, null, 2)}`,
		)
		// Acumula os valores por período
		const amountsByPeriod: IStackedData[] = []
		uniquePeriods.forEach((period) => {
			filteredByLabel.forEach((stackedItem) => {
				if (stackedItem.period === period) {
					const latest = amountsByPeriod.find(
						(item) => item.period === period,
					)
					if (latest) {
						latest.entry[1] += stackedItem.entry[1]
					} else {
						amountsByPeriod.push({
							period: stackedItem.period,
							entry: [...stackedItem.entry], // Faz uma cópia do array de entry
						})
					}
				}
			})
		})

		this.baseLogger.log(
			`accumulatedByLabel: ${JSON.stringify(amountsByPeriod, null, 2)}`,
		)
		// Calcula o total geral de todos os períodos
		const totalSum = amountsByPeriod.reduce(
			(acc, stackedItem) => acc + stackedItem.entry[1],
			0,
		)
		// Calcula o percentual de cada período em relação ao total geral
		const percentualByLabel: IStackedData[] = amountsByPeriod.map(
			(stackedItem) => {
				let percentual = (stackedItem.entry[1] / totalSum) * 100 // Percentual correto
				if (percentual > 1) {
					percentual = Math.round(percentual) // Arredonda para facilitar
				} else {
					percentual = parseFloat(percentual.toFixed(2)) // Ajusta para duas casas decimais
				}
				return {
					period: stackedItem.period,
					entry: [label, percentual],
				}
			},
		)
		this.baseLogger.log(
			`percentualByLabel: ${JSON.stringify(percentualByLabel, null, 2)}`,
		)
		return percentualByLabel
	}
}
