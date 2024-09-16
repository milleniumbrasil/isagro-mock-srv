import { Injectable, Logger } from "@nestjs/common"
import { BaseService } from "../BaseService"

@Injectable()
export class StateService extends BaseService {
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
			{ uf: "AC", estado: "Acre" },
			{ uf: "AL", estado: "Alagoas" },
			{ uf: "AP", estado: "Amapá" },
			{ uf: "AM", estado: "Amazonas" },
			{ uf: "BA", estado: "Bahia" },
			{ uf: "CE", estado: "Ceará" },
			{ uf: "DF", estado: "Distrito Federal" },
			{ uf: "ES", estado: "Espírito Santo" },
			{ uf: "GO", estado: "Goiás" },
			{ uf: "MA", estado: "Maranhão" },
			{ uf: "MT", estado: "Mato Grosso" },
			{ uf: "MS", estado: "Mato Grosso do Sul" },
			{ uf: "MG", estado: "Minas Gerais" },
			{ uf: "PA", estado: "Pará" },
			{ uf: "PB", estado: "Paraíba" },
			{ uf: "PR", estado: "Paraná" },
			{ uf: "PE", estado: "Pernambuco" },
			{ uf: "PI", estado: "Piauí" },
			{ uf: "RJ", estado: "Rio de Janeiro" },
			{ uf: "RN", estado: "Rio Grande do Norte" },
			{ uf: "RS", estado: "Rio Grande do Sul" },
			{ uf: "RO", estado: "Rondônia" },
			{ uf: "RR", estado: "Roraima" },
			{ uf: "SC", estado: "Santa Catarina" },
			{ uf: "SP", estado: "São Paulo" },
			{ uf: "SE", estado: "Sergipe" },
			{ uf: "TO", estado: "Tocantins " },
		] as T[]
	}
}
