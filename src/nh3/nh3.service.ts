import { Injectable, Logger } from "@nestjs/common"
import { IData } from "../types"
import { BaseService } from "../BaseService";

@Injectable()
export class NH3Service extends BaseService {

    private readonly logger = new Logger(NH3Service.name);

	public getValidLabels(): string[] {
		return ['fertilizantes químicos', 'fertilizantes orgânicos', 'manejo de esterco', 'deposição de extretas', 'queimas de resíduos de culturas'];
	}

	public getData<T>(): T[] {
		return [
			// Dados de 1990
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1990", entry: ["fertilizantes químicos", 100] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1990", entry: ["fertilizantes orgânicos", 150] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1990", entry: ["manejo de esterco", 50] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1990", entry: ["deposição de extretas", 10] },

			// Dados de 1991
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1991", entry: ["fertilizantes químicos", 200] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1991", entry: ["fertilizantes orgânicos", 250] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1991", entry: ["manejo de esterco", 150] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1991", entry: ["deposição de extretas", 110] },

			// Dados de 1992
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1992", entry: ["fertilizantes químicos", 300] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1992", entry: ["fertilizantes orgânicos", 350] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1992", entry: ["manejo de esterco", 250] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1992", entry: ["deposição de extretas", 210] },

			// Dados de 1993
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1993", entry: ["fertilizantes químicos", 400] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1993", entry: ["fertilizantes orgânicos", 450] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1993", entry: ["manejo de esterco", 350] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1993", entry: ["deposição de extretas", 310] },

			// Dados de 1994
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1994", entry: ["fertilizantes químicos", 900] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1994", entry: ["fertilizantes orgânicos", 900] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1994", entry: ["manejo de esterco", 1100] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1994", entry: ["deposição de extretas", 900] },

			// Dados de 1995
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1995", entry: ["fertilizantes químicos", 1200] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1995", entry: ["fertilizantes orgânicos", 1300] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1995", entry: ["manejo de esterco", 1450] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1995", entry: ["deposição de extretas", 9000] },
		] as T[];
	}
}

