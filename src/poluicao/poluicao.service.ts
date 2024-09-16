import { Injectable, Logger } from "@nestjs/common"
import { IData } from "../types"
import { BaseService } from "../BaseService";

@Injectable()
export class PoluicaoService extends BaseService {

    private readonly logger = new Logger(PoluicaoService.name);

	public getValidLabels(): string[] {
		return ['nitrato', 'fosfato', 'cations', 'anions'];
	}

	public getData<T>(): T[] {
		return [
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1990", entry: ["fosfato", 100] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1990", entry: ["anions", 150] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1990", entry: ["cations", 50] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1990", entry: ["nitrato", 10] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1990", entry: ["fosfato", 110] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1990", entry: ["anions", 160] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1990", entry: ["cations", 60] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1990", entry: ["nitrato", 20] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1991", entry: ["fosfato", 250] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1991", entry: ["anions", 350] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1991", entry: ["cations", 200] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1991", entry: ["nitrato", 100] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1992", entry: ["fosfato", 400] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1992", entry: ["anions", 500] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1992", entry: ["cations", 450] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1992", entry: ["nitrato", 250] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1992", entry: ["fosfato", 410] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1992", entry: ["anions", 510] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1992", entry: ["cations", 460] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1992", entry: ["nitrato", 260] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1993", entry: ["fosfato", 800] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1993", entry: ["anions", 750] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1993", entry: ["cations", 800] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1993", entry: ["nitrato", 450] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1994", entry: ["fosfato", 900] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1994", entry: ["anions", 900] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1994", entry: ["cations", 1100] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1994", entry: ["nitrato", 900] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1994", entry: ["fosfato", 910] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1994", entry: ["anions", 910] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1994", entry: ["cations", 1110] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1994", entry: ["nitrato", 910] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1995", entry: ["fosfato", 1200] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1995", entry: ["anions", 1300] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1995", entry: ["cations", 1450] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1995", entry: ["nitrato", 9000] },
		] as T[];
	}
}
