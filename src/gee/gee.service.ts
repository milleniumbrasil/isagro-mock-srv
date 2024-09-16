import { Injectable, Logger } from "@nestjs/common"
import { IData } from "../types"
import { BaseService } from "../BaseService";

@Injectable()
export class GEEService extends BaseService {

    private readonly logger = new Logger(GEEService.name);

	public getValidLabels(): string[] {
		return ['tecnologia2', 'tecnologia1', 'tecnologia3', 'tecnologia4'];
	}

	public getData<T>(): T[] {
		return [
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1990", entry: ["tecnologia1", 100] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1990", entry: ["tecnologia4", 150] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1990", entry: ["tecnologia3", 50] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1990", entry: ["tecnologia2", 10] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1990", entry: ["tecnologia1", 110] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1990", entry: ["tecnologia4", 160] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1990", entry: ["tecnologia3", 60] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1990", entry: ["tecnologia2", 20] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1991", entry: ["tecnologia1", 250] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1991", entry: ["tecnologia4", 350] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1991", entry: ["tecnologia3", 200] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1991", entry: ["tecnologia2", 100] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1992", entry: ["tecnologia1", 400] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1992", entry: ["tecnologia4", 500] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1992", entry: ["tecnologia3", 450] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1992", entry: ["tecnologia2", 250] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1992", entry: ["tecnologia1", 410] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1992", entry: ["tecnologia4", 510] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1992", entry: ["tecnologia3", 460] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1992", entry: ["tecnologia2", 260] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1993", entry: ["tecnologia1", 800] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1993", entry: ["tecnologia4", 750] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1993", entry: ["tecnologia3", 800] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1993", entry: ["tecnologia2", 450] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1994", entry: ["tecnologia1", 900] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1994", entry: ["tecnologia4", 900] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1994", entry: ["tecnologia3", 1100] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1994", entry: ["tecnologia2", 900] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1994", entry: ["tecnologia1", 910] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1994", entry: ["tecnologia4", 910] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1994", entry: ["tecnologia3", 1110] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1994", entry: ["tecnologia2", 910] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1995", entry: ["tecnologia1", 1200] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1995", entry: ["tecnologia4", 1300] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1995", entry: ["tecnologia3", 1450] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1995", entry: ["tecnologia2", 9000] },
		] as T[];
	}
}

