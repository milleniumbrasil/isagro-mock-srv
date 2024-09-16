import { Injectable, Logger } from "@nestjs/common"
import { BaseService } from "../BaseService"

@Injectable()
export class CityService extends BaseService {
	private readonly logger = new Logger(CityService.name)

	public getValidLabels(): string[] {
		return [
			"RJ",
			"RJ",
			"RJ",
			"SP",
			"SP",
			"SP",
			"MG",
			"MG",
			"MG",
			"BA",
			"BA",
			"BA",
			"RS",
			"RS",
			"RS",
			"AM",
			"AM",
			"AM",
			"PE",
			"PE",
			"PE",
		]
	}

	public getData<T>(): T[] {
		return [
			{ uf: "RJ", cidade: "Rio de Janeiro" },
			{ uf: "RJ", cidade: "Niterói" },
			{ uf: "RJ", cidade: "Angra dos Reis" },
			{ uf: "SP", cidade: "São Paulo" },
			{ uf: "SP", cidade: "Campinas" },
			{ uf: "SP", cidade: "Santos" },
			{ uf: "MG", cidade: "Belo Horizonte" },
			{ uf: "MG", cidade: "Uberlândia" },
			{ uf: "MG", cidade: "Juiz de Fora" },
			{ uf: "BA", cidade: "Salvador" },
			{ uf: "BA", cidade: "Feira de Santana" },
			{ uf: "BA", cidade: "Ilhéus" },
			{ uf: "RS", cidade: "Porto Alegre" },
			{ uf: "RS", cidade: "Caxias do Sul" },
			{ uf: "RS", cidade: "Pelotas" },
			{ uf: "AM", cidade: "Manaus" },
			{ uf: "AM", cidade: "Parintins" },
			{ uf: "AM", cidade: "Itacoatiara" },
			{ uf: "PE", cidade: "Recife" },
			{ uf: "PE", cidade: "Olinda" },
			{ uf: "PE", cidade: "Caruaru" },
		] as T[]
	}
}
