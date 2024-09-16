import { Injectable, Logger } from "@nestjs/common"
import { IData } from "../types"
import { BaseService } from "../BaseService";

@Injectable()
export class ErosaoService extends BaseService {

    private readonly logger = new Logger(ErosaoService.name);

	public getValidLabels(): string[] {
		return ['pastagem', 'cultura'];
	}

	public getData<T>(): T[] {
		return [
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1990", entry: ["cultura", 100] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1990", entry: ["cultura", 150] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1990", entry: ["pastagem", 50] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1990", entry: ["pastagem", 10] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1990", entry: ["cultura", 110] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1990", entry: ["cultura", 160] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1990", entry: ["pastagem", 60] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1990", entry: ["pastagem", 20] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1991", entry: ["cultura", 250] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1991", entry: ["cultura", 350] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1991", entry: ["pastagem", 200] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1991", entry: ["pastagem", 100] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1992", entry: ["cultura", 400] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1992", entry: ["cultura", 500] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1992", entry: ["pastagem", 450] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1992", entry: ["pastagem", 250] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1992", entry: ["cultura", 410] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1992", entry: ["cultura", 510] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1992", entry: ["pastagem", 460] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1992", entry: ["pastagem", 260] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1993", entry: ["cultura", 800] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1993", entry: ["cultura", 750] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1993", entry: ["pastagem", 800] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1993", entry: ["pastagem", 450] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1994", entry: ["cultura", 900] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1994", entry: ["cultura", 900] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1994", entry: ["pastagem", 1100] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1994", entry: ["pastagem", 900] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1994", entry: ["cultura", 910] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1994", entry: ["cultura", 910] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1994", entry: ["pastagem", 1110] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1994", entry: ["pastagem", 910] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1995", entry: ["cultura", 1200] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1995", entry: ["cultura", 1300] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1995", entry: ["pastagem", 1450] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1995", entry: ["pastagem", 9000] },
		] as T[];
	}
}
