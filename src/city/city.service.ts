import { Injectable, Logger } from "@nestjs/common"
import { BaseService } from "../BaseService"
import { ICity } from "src/types";

@Injectable()
export class CityService extends BaseService {

	private readonly logger = new Logger(CityService.name)

	public getValidLabels(): string[] {
		return [
			'AC', 'MS', 'RS', 'CE', 'RO', 'SC', 'SE',
			'AP', 'PB', 'AL', 'PE', 'PR', 'RJ', 'MT',
			'DF', 'AM', 'BA', 'SP', 'ES', 'PI', 'PA',
			'RR', 'MA', 'TO', 'GO', 'RN', 'MG'
		   ]
	}

	public getData<T>(): T[] {
		return [
			{ iso: "BR-AC", abbreviation: "AC", city: "Rio Branco" },
			{ iso: "BR-AL", abbreviation: "AL", city: "Arapiraca" },
			{ iso: "BR-AL", abbreviation: "AL", city: "Maceió" },
			{ iso: "BR-AM", abbreviation: "AM", city: "Manaus" },
			{ iso: "BR-AM", abbreviation: "AM", city: "Parintins" },
			{ iso: "BR-AP", abbreviation: "AP", city: "Macapá" },
			{ iso: "BR-BA", abbreviation: "BA", city: "Feira de Santana" },
			{ iso: "BR-BA", abbreviation: "BA", city: "Ilhéus" },
			{ iso: "BR-BA", abbreviation: "BA", city: "Salvador" },
			{ iso: "BR-CE", abbreviation: "CE", city: "Fortaleza" },
			{ iso: "BR-CE", abbreviation: "CE", city: "Juazeiro do Norte" },
			{ iso: "BR-CE", abbreviation: "CE", city: "Sobral" },
			{ iso: "BR-DF", abbreviation: "DF", city: "Brasília" },
			{ iso: "BR-ES", abbreviation: "ES", city: "Vila Velha" },
			{ iso: "BR-ES", abbreviation: "ES", city: "Vitória" },
			{ iso: "BR-GO", abbreviation: "GO", city: "Anápolis" },
			{ iso: "BR-GO", abbreviation: "GO", city: "Goiânia" },
			{ iso: "BR-MA", abbreviation: "MA", city: "Imperatriz" },
			{ iso: "BR-MA", abbreviation: "MA", city: "São Luís" },
			{ iso: "BR-MG", abbreviation: "MG", city: "Belo Horizonte" },
			{ iso: "BR-MG", abbreviation: "MG", city: "Contagem" },
			{ iso: "BR-MG", abbreviation: "MG", city: "Juiz de Fora" },
			{ iso: "BR-MG", abbreviation: "MG", city: "Uberlândia" },
			{ iso: "BR-MS", abbreviation: "MS", city: "Campo Grande" },
			{ iso: "BR-MS", abbreviation: "MS", city: "Dourados" },
			{ iso: "BR-MT", abbreviation: "MT", city: "Cuiabá" },
			{ iso: "BR-MT", abbreviation: "MT", city: "Rondonópolis" },
			{ iso: "BR-PA", abbreviation: "PA", city: "Belém" },
			{ iso: "BR-PA", abbreviation: "PA", city: "Marabá" },
			{ iso: "BR-PA", abbreviation: "PA", city: "Santarém" },
			{ iso: "BR-PB", abbreviation: "PB", city: "Campina Grande" },
			{ iso: "BR-PB", abbreviation: "PB", city: "João Pessoa" },
			{ iso: "BR-PE", abbreviation: "PE", city: "Caruaru" },
			{ iso: "BR-PE", abbreviation: "PE", city: "Olinda" },
			{ iso: "BR-PE", abbreviation: "PE", city: "Recife" },
			{ iso: "BR-PI", abbreviation: "PI", city: "Parnaíba" },
			{ iso: "BR-PI", abbreviation: "PI", city: "Teresina" },
			{ iso: "BR-PR", abbreviation: "PR", city: "Curitiba" },
			{ iso: "BR-PR", abbreviation: "PR", city: "Londrina" },
			{ iso: "BR-PR", abbreviation: "PR", city: "Maringá" },
			{ iso: "BR-RJ", abbreviation: "RJ", city: "Angra dos Reis" },
			{ iso: "BR-RJ", abbreviation: "RJ", city: "Niterói" },
			{ iso: "BR-RJ", abbreviation: "RJ", city: "Rio de Janeiro" },
			{ iso: "BR-RN", abbreviation: "RN", city: "Mossoró" },
			{ iso: "BR-RN", abbreviation: "RN", city: "Natal" },
			{ iso: "BR-RO", abbreviation: "RO", city: "Porto Velho" },
			{ iso: "BR-RR", abbreviation: "RR", city: "Boa Vista" },
			{ iso: "BR-RS", abbreviation: "RS", city: "Caxias do Sul" },
			{ iso: "BR-RS", abbreviation: "RS", city: "Pelotas" },
			{ iso: "BR-RS", abbreviation: "RS", city: "Porto Alegre" },
			{ iso: "BR-SC", abbreviation: "SC", city: "Blumenau" },
			{ iso: "BR-SC", abbreviation: "SC", city: "Florianópolis" },
			{ iso: "BR-SC", abbreviation: "SC", city: "Joinville" },
			{ iso: "BR-SE", abbreviation: "SE", city: "Aracaju" },
			{ iso: "BR-SP", abbreviation: "SP", city: "Campinas" },
			{ iso: "BR-SP", abbreviation: "SP", city: "Santos" },
			{ iso: "BR-SP", abbreviation: "SP", city: "São Paulo" },
			{ iso: "BR-TO", abbreviation: "TO", city: "Palmas" },
		] as T[]
	}

	public getCitiesByState(stateAbbreviation: string): ICity[] {
		const cities: ICity[] = this.getData();
		this.logger.log(`Buscando cidades do estado ${stateAbbreviation} em ${cities.length} registros.`);
		console.log(`Buscando cidades em ${JSON.stringify(cities, null, 2)}`);
		return cities.filter((item) => item.abbreviation === stateAbbreviation);
	}
}
