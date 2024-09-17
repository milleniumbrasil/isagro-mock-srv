import { Injectable, Logger } from "@nestjs/common"
import { BaseService } from "../BaseService"
import { ICountry, IState } from "src/types"

@Injectable()
export class StateService extends BaseService {


	getStateByISO(isoAbbreviation: string): IState {
		const states: IState[] = this.getData();
		this.logger.log(`Buscando estado do ISO ${isoAbbreviation} em ${states.length} registros. ${JSON.stringify(states)}`);

		// Ajuste: usa `endsWith` para buscar o estado pela parte final do ISO
		const result: IState | undefined = states.find((iState) => iState.iso.endsWith(isoAbbreviation));

		if (!result) {
			throw new Error(`State with ISO code ${isoAbbreviation} not found`);
		}

		this.logger.log(`Resultado da busca: ${JSON.stringify(result, null, 2)}`);
		return result;
	}

	private readonly logger = new Logger(StateService.name)

	public getValidLabels(): string[] {
		return [
			"AC",
			"AL",
			"AP",
			"AM",
			"BA",
			"CE",
			"DF",
			"ES",
			"GO",
			"MA",
			"MT",
			"MS",
			"MG",
			"PA",
			"PB",
			"PR",
			"PE",
			"PI",
			"RJ",
			"RN",
			"RS",
			"RO",
			"RR",
			"SC",
			"SP",
			"SE",
			"TO",
		]
	}

	public getData<T>(): T[] {
		return [
			{ iso: "BR-AC", abbreviation: "AC", name: "Acre" },
			{ iso: "BR-AL", abbreviation: "AL", name: "Alagoas" },
			{ iso: "BR-AP", abbreviation: "AP", name: "Amapá" },
			{ iso: "BR-AM", abbreviation: "AM", name: "Amazonas" },
			{ iso: "BR-BA", abbreviation: "BA", name: "Bahia" },
			{ iso: "BR-CE", abbreviation: "CE", name: "Ceará" },
			{ iso: "BR-DF", abbreviation: "DF", name: "Distrito Federal" },
			{ iso: "BR-ES", abbreviation: "ES", name: "Espírito Santo" },
			{ iso: "BR-GO", abbreviation: "GO", name: "Goiás" },
			{ iso: "BR-MA", abbreviation: "MA", name: "Maranhão" },
			{ iso: "BR-MT", abbreviation: "MT", name: "Mato Grosso" },
			{ iso: "BR-MS", abbreviation: "MS", name: "Mato Grosso do Sul" },
			{ iso: "BR-MG", abbreviation: "MG", name: "Minas Gerais" },
			{ iso: "BR-PA", abbreviation: "PA", name: "Pará" },
			{ iso: "BR-PB", abbreviation: "PB", name: "Paraíba" },
			{ iso: "BR-PR", abbreviation: "PR", name: "Paraná" },
			{ iso: "BR-PE", abbreviation: "PE", name: "Pernambuco" },
			{ iso: "BR-PI", abbreviation: "PI", name: "Piauí" },
			{ iso: "BR-RJ", abbreviation: "RJ", name: "Rio de Janeiro" },
			{ iso: "BR-RN", abbreviation: "RN", name: "Rio Grande do Norte" },
			{ iso: "BR-RS", abbreviation: "RS", name: "Rio Grande do Sul" },
			{ iso: "BR-RO", abbreviation: "RO", name: "Rondônia" },
			{ iso: "BR-RR", abbreviation: "RR", name: "Roraima" },
			{ iso: "BR-SC", abbreviation: "SC", name: "Santa Catarina" },
			{ iso: "BR-SP", abbreviation: "SP", name: "São Paulo" },
			{ iso: "BR-SE", abbreviation: "SE", name: "Sergipe" },
			{ iso: "BR-TO", abbreviation: "TO", name: "Tocantins " },
		] as T[]
	}

	public getStatesByCountry(countryISO: string): IState[] {
		const states: IState[] = this.getData();
		this.logger.log(`Buscando estados do país ${countryISO} em ${states.length} registros.`);
		return states.filter((item) => item.iso.startsWith(countryISO));
	}
}
