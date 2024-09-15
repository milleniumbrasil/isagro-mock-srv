import { Injectable, Logger } from "@nestjs/common"
import { IData } from "../types"
import { BaseService } from "../BaseService";

@Injectable()
export class PesticitasService extends BaseService {

    private readonly logger = new Logger(PesticitasService.name);

	public getValidLabels(): string[] {
		return ['herbicidas', 'fungicidas', 'inseticitas', 'outros'];
	}

	public getData(): IData[] {
		return [
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1990", entry: ["fungicidas", 100] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1990", entry: ["outros", 150] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1990", entry: ["inseticitas", 50] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1990", entry: ["herbicidas", 10] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1990", entry: ["fungicidas", 110] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1990", entry: ["outros", 160] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1990", entry: ["inseticitas", 60] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1990", entry: ["herbicidas", 20] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1991", entry: ["fungicidas", 250] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1991", entry: ["outros", 350] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1991", entry: ["inseticitas", 200] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1991", entry: ["herbicidas", 100] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1992", entry: ["fungicidas", 400] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1992", entry: ["outros", 500] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1992", entry: ["inseticitas", 450] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1992", entry: ["herbicidas", 250] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1992", entry: ["fungicidas", 410] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1992", entry: ["outros", 510] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1992", entry: ["inseticitas", 460] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1992", entry: ["herbicidas", 260] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1993", entry: ["fungicidas", 800] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1993", entry: ["outros", 750] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1993", entry: ["inseticitas", 800] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1993", entry: ["herbicidas", 450] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1994", entry: ["fungicidas", 900] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1994", entry: ["outros", 900] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1994", entry: ["inseticitas", 1100] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1994", entry: ["herbicidas", 900] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1994", entry: ["fungicidas", 910] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1994", entry: ["outros", 910] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1994", entry: ["inseticitas", 1110] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1994", entry: ["herbicidas", 910] },

			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1995", entry: ["fungicidas", 1200] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1995", entry: ["outros", 1300] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1995", entry: ["inseticitas", 1450] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1995", entry: ["herbicidas", 9000] },
		] as IData[];
	}
}
