import { Injectable, Logger } from "@nestjs/common"
import { IData, IStackedData } from "../types"
import { BaseService } from "src/BaseService";

@Injectable()
export class NH3Service extends BaseService {

    private readonly logger = new Logger(NH3Service.name);

	public getData(): IData[] {
		return [
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1990", entry: ["grão", 100] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1990", entry: ["hortaliças", 150] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1990", entry: ["fruticultura", 50] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1990", entry: ["pastagem", 10] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1990", entry: ["grão", 110] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1990", entry: ["hortaliças", 160] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1990", entry: ["fruticultura", 60] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1990", entry: ["pastagem", 20] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1991", entry: ["grão", 250] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1991", entry: ["hortaliças", 350] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1991", entry: ["fruticultura", 200] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1991", entry: ["pastagem", 100] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1992", entry: ["grão", 400] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1992", entry: ["hortaliças", 500] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1992", entry: ["fruticultura", 450] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1992", entry: ["pastagem", 250] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1992", entry: ["grão", 410] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1992", entry: ["hortaliças", 510] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1992", entry: ["fruticultura", 460] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1992", entry: ["pastagem", 260] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1993", entry: ["grão", 800] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1993", entry: ["hortaliças", 750] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1993", entry: ["fruticultura", 800] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1993", entry: ["pastagem", 450] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1994", entry: ["grão", 900] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1994", entry: ["hortaliças", 900] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1994", entry: ["fruticultura", 1100] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1994", entry: ["pastagem", 900] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1994", entry: ["grão", 910] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1994", entry: ["hortaliças", 910] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1994", entry: ["fruticultura", 1110] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1994", entry: ["pastagem", 910] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1995", entry: ["grão", 1200] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1995", entry: ["hortaliças", 1300] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1995", entry: ["fruticultura", 1450] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1995", entry: ["pastagem", 9000] },
		] as IData[];
	}
}

