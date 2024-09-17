// src/BaseService.ts

import { Injectable, Logger } from "@nestjs/common"
import { ICountry, IData, IPercentualData, IStackedData } from "./types"
import { CountryService } from "./country/country.service";

@Injectable()
export abstract class BaseService {

	private readonly baseLogger = new Logger(BaseService.name);
	private readonly countryService = new CountryService();

	// Método genérico que deve ser implementado nas subclasses para fornecer os dados
	public abstract getData<T>(): T[]

	// Método genérico que deve ser implementado nas subclasses para fornecer os dados
	public abstract getValidLabels(): string[]

	// Método comum para todos os serviços
	public getStackedDataValues(): IStackedData[] {
		const data: IData[] = this.getData();
		return this.toStackedData(data);
	}

	// Método comum para todos os serviços
	public getStackedData(): IStackedData[] {
		return this.getStackedDataValues()
	}

	public getStackedByCountry(label: string, country: string): IStackedData[] {
		const countryTaken: ICountry = this.countryService.getCountryByISO(country);
		const data: IData[] = this.getData();
		const filteredDataByLabelNCountry = data.filter((item) => {
			if (label) {
				return item.country === countryTaken.iso && item.entry[0] === label;
			}
			return item.country === countryTaken.iso;
		});
		return this.toStackedData(filteredDataByLabelNCountry);
	}

	protected toPercentualData(data: IStackedData[]): IPercentualData[] {
		return data.map(item => ({
			period: item.period,      // Copia o período diretamente
			value: item.entry[1]      // Transforma o segundo valor do array `entry` no `value`
		}));
	}

	protected toStackedData(data: IData[]): IStackedData[] {
		return data.map(item => ({
			period: item.period,      // Copia o período diretamente
			entry: item.entry         // Copia o array 'entry' diretamente
		}));
	}

	protected getPercentualByPeriodsByLabel(
		data: IStackedData[],
		label: string,
	): IStackedData[] {
		// Filtra os dados pelo label fornecido
		const filteredByLabel: IStackedData[] = data.filter((stackedItem) => {
			return stackedItem.entry[0] === label
		});
		// Identifica os períodos únicos
		const uniquePeriods = data.reduce((acc, current) => {
			acc.add(current.period)
			return acc
		}, new Set());
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
		});
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
		);
		return percentualByLabel
	}

	protected getStackedByPeriodByLabel(data: IStackedData[], label: string): IStackedData[] {
		// Filtra os dados pelo label fornecido
		const filteredByLabel: IStackedData[] = data.filter((stackedItem) => {
			return stackedItem.entry[0] === label;
		});

		// Acumula os valores por período diretamente com reduce
		const amountsByPeriod = filteredByLabel.reduce((acc, stackedItem) => {
			const existingItem = acc.find((item) => item.period === stackedItem.period);

			if (existingItem) {
				// Se já existe um item para o mesmo período, soma o valor
				existingItem.entry[1] += stackedItem.entry[1];
			} else {
				// Se não existe, adiciona um novo item ao acumulador
				acc.push({
					period: stackedItem.period,
					entry: [label, stackedItem.entry[1]] // Cria uma nova entrada para o período e label
				});
			}

			return acc;
		}, [] as IStackedData[]);

		return amountsByPeriod;
	}

	public getStackedByState(state: string): IStackedData[] {
		const data: IStackedData[] = this.getStackedDataValues();
		// Filtra os dados pelo state fornecido
		const filteredByState: IStackedData[] = data.filter((stackedItem) => {
			return stackedItem.entry[0] === state;
		});
		return filteredByState;
	}

	public getStackedByCity(city: string): IStackedData[] {
		const data: IStackedData[] = this.getStackedDataValues();
		// Filtra os dados pelo city fornecido
		const filteredByCity: IStackedData[] = data.filter((stackedItem) => {
			return stackedItem.entry[0] === city;
		});
		return filteredByCity;
	}

	protected getPercentualByPeriods(
		data: IStackedData[]
	): IStackedData[] {
		// Identifica os períodos únicos
		const uniquePeriods = data.reduce((acc, current) => {
			acc.add(current.period)
			return acc
		}, new Set());
		// Acumula os valores por período
		const amountsByPeriod: IStackedData[] = []
		uniquePeriods.forEach((period) => {
			data.forEach((stackedItem) => {
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
		});
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
					entry: ['percentual', percentual],
				}
			},
		)
		return percentualByLabel
	}

	public getDataByLabel(label: string): IStackedData[] {
		return this.getStackedByPeriodByLabel(this.getStackedDataValues(), label);
	}

	public getPercentualDataByLabel(label: string): IPercentualData[] {
		const stacked: IStackedData[] = this.getPercentualByPeriodsByLabel(this.getStackedDataValues(), label);
		const result: IPercentualData[] = this.toPercentualData(stacked);  // Chama a função de transformação
		return result;
	}

	public getPercentualDataByPeriod(): IPercentualData[] {
		const stacked: IStackedData[] = this.getPercentualByPeriods(this.getStackedDataValues());
		const result: IPercentualData[] = this.toPercentualData(stacked);  // Chama a função de transformação
		return result;
	}
}
