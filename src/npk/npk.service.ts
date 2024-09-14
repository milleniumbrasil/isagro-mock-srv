import { Injectable, Logger } from "@nestjs/common"
import { IData } from "../types"
import { BaseService } from "../BaseService";

@Injectable()
export class NPKService extends BaseService {

    private readonly logger = new Logger(NPKService.name);

	public getValidLabels(): string[] {
		return ['dejetos animais', 'deposição atmosférica', 'fertilizantes minerais', 'fertilizantes orgânicos', 'fixação biológica de nitrogênio', 'resíduos culturais', 'resíduos industriais', 'resíduos urbanos', 'produção carne bovina', 'produção agrícola', 'área agropecuária'];
	}

	public getData(): IData[] {
		return [
			// Dados de 1990
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1990", entry: ["dejetos animais", 100] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1990", entry: ["deposição atmosférica", 150] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1990", entry: ["fertilizantes minerais", 50] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1990", entry: ["fertilizantes orgânicos", 10] },
			{ country: "BR", state: "SC", city: "Florianópolis", period: "1990", entry: ["fixação biológica de nitrogênio", 60] },
			{ country: "BR", state: "MG", city: "Belo Horizonte", period: "1990", entry: ["resíduos culturais", 70] },
			{ country: "BR", state: "BA", city: "Salvador", period: "1990", entry: ["resíduos industriais", 80] },
			{ country: "BR", state: "RS", city: "Porto Alegre", period: "1990", entry: ["resíduos urbanos", 90] },
			{ country: "BR", state: "MT", city: "Cuiabá", period: "1990", entry: ["produção carne bovina", 95] },
			{ country: "BR", state: "MS", city: "Campo Grande", period: "1990", entry: ["produção agrícola", 100] },
			{ country: "BR", state: "GO", city: "Goiânia", period: "1990", entry: ["área agropecuária", 105] },

			// Dados de 1991
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1991", entry: ["dejetos animais", 200] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1991", entry: ["deposição atmosférica", 250] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1991", entry: ["fertilizantes minerais", 150] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1991", entry: ["fertilizantes orgânicos", 110] },
			{ country: "BR", state: "SC", city: "Florianópolis", period: "1991", entry: ["fixação biológica de nitrogênio", 160] },
			{ country: "BR", state: "MG", city: "Belo Horizonte", period: "1991", entry: ["resíduos culturais", 170] },
			{ country: "BR", state: "BA", city: "Salvador", period: "1991", entry: ["resíduos industriais", 180] },
			{ country: "BR", state: "RS", city: "Porto Alegre", period: "1991", entry: ["resíduos urbanos", 190] },
			{ country: "BR", state: "MT", city: "Cuiabá", period: "1991", entry: ["produção carne bovina", 195] },
			{ country: "BR", state: "MS", city: "Campo Grande", period: "1991", entry: ["produção agrícola", 200] },
			{ country: "BR", state: "GO", city: "Goiânia", period: "1991", entry: ["área agropecuária", 205] },

			// Dados de 1992
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1992", entry: ["dejetos animais", 300] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1992", entry: ["deposição atmosférica", 350] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1992", entry: ["fertilizantes minerais", 250] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1992", entry: ["fertilizantes orgânicos", 210] },
			{ country: "BR", state: "SC", city: "Florianópolis", period: "1992", entry: ["fixação biológica de nitrogênio", 260] },
			{ country: "BR", state: "MG", city: "Belo Horizonte", period: "1992", entry: ["resíduos culturais", 270] },
			{ country: "BR", state: "BA", city: "Salvador", period: "1992", entry: ["resíduos industriais", 280] },
			{ country: "BR", state: "RS", city: "Porto Alegre", period: "1992", entry: ["resíduos urbanos", 290] },
			{ country: "BR", state: "MT", city: "Cuiabá", period: "1992", entry: ["produção carne bovina", 295] },
			{ country: "BR", state: "MS", city: "Campo Grande", period: "1992", entry: ["produção agrícola", 300] },
			{ country: "BR", state: "GO", city: "Goiânia", period: "1992", entry: ["área agropecuária", 305] },

			// Dados de 1993
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1993", entry: ["dejetos animais", 400] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1993", entry: ["deposição atmosférica", 450] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1993", entry: ["fertilizantes minerais", 350] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1993", entry: ["fertilizantes orgânicos", 310] },
			{ country: "BR", state: "SC", city: "Florianópolis", period: "1993", entry: ["fixação biológica de nitrogênio", 360] },
			{ country: "BR", state: "MG", city: "Belo Horizonte", period: "1993", entry: ["resíduos culturais", 370] },
			{ country: "BR", state: "BA", city: "Salvador", period: "1993", entry: ["resíduos industriais", 380] },
			{ country: "BR", state: "RS", city: "Porto Alegre", period: "1993", entry: ["resíduos urbanos", 390] },
			{ country: "BR", state: "MT", city: "Cuiabá", period: "1993", entry: ["produção carne bovina", 395] },
			{ country: "BR", state: "MS", city: "Campo Grande", period: "1993", entry: ["produção agrícola", 400] },
			{ country: "BR", state: "GO", city: "Goiânia", period: "1993", entry: ["área agropecuária", 405] },

			// Dados de 1994
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1994", entry: ["dejetos animais", 900] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1994", entry: ["deposição atmosférica", 900] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1994", entry: ["fertilizantes minerais", 1100] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1994", entry: ["fertilizantes orgânicos", 900] },
			{ country: "BR", state: "SC", city: "Florianópolis", period: "1994", entry: ["fixação biológica de nitrogênio", 1000] },
			{ country: "BR", state: "MG", city: "Belo Horizonte", period: "1994", entry: ["resíduos culturais", 1050] },
			{ country: "BR", state: "BA", city: "Salvador", period: "1994", entry: ["resíduos industriais", 1100] },
			{ country: "BR", state: "RS", city: "Porto Alegre", period: "1994", entry: ["resíduos urbanos", 1150] },
			{ country: "BR", state: "MT", city: "Cuiabá", period: "1994", entry: ["produção carne bovina", 1200] },
			{ country: "BR", state: "MS", city: "Campo Grande", period: "1994", entry: ["produção agrícola", 1250] },
			{ country: "BR", state: "GO", city: "Goiânia", period: "1994", entry: ["área agropecuária", 1300] },

			// Dados de 1995
			{ country: "BR", state: "RJ", city: "Rio de Janeiro", period: "1995", entry: ["dejetos animais", 1200] },
			{ country: "BR", state: "SP", city: "São Paulo", period: "1995", entry: ["deposição atmosférica", 1300] },
			{ country: "BR", state: "DF", city: "Brasília", period: "1995", entry: ["fertilizantes minerais", 1450] },
			{ country: "BR", state: "PR", city: "Curitiba", period: "1995", entry: ["fertilizantes orgânicos", 9000] },
			{ country: "BR", state: "SC", city: "Florianópolis", period: "1995", entry: ["fixação biológica de nitrogênio", 1500] },
			{ country: "BR", state: "MG", city: "Belo Horizonte", period: "1995", entry: ["resíduos culturais", 1600] },
			{ country: "BR", state: "BA", city: "Salvador", period: "1995", entry: ["resíduos industriais", 1700] },
			{ country: "BR", state: "RS", city: "Porto Alegre", period: "1995", entry: ["resíduos urbanos", 1800] },
			{ country: "BR", state: "MT", city: "Cuiabá", period: "1995", entry: ["produção carne bovina", 1900] },
			{ country: "BR", state: "MS", city: "Campo Grande", period: "1995", entry: ["produção agrícola", 2000] },
			{ country: "BR", state: "GO", city: "Goiânia", period: "1995", entry: ["área agropecuária", 2100] },

		] as IData[];
	}
}

