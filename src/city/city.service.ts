import { Injectable, Logger } from "@nestjs/common"
import { BaseService } from "../BaseService"
import { ICity } from "src/types";

@Injectable()
export class CityService extends BaseService {

	getCityByISO(state: string, city: string): ICity {
		const cities: ICity[] = this.getData();
		this.logger.log(`Buscando cidades do ISO ${city} em ${cities.length} registros.`);
		return cities.find((c) => c.abbreviation === state && c.name === city);
	}

	private readonly logger = new Logger(CityService.name)

	public getValidLabels(): string[] {
		return [
			'Rio Branco',
			'Arapiraca',
			'Maceió',
			'Manaus',
			'Parintins',
			'Macapá',
			'Feira de Santana',
			'Ilhéus',
			'Salvador',
			'Fortaleza',
			'Juazeiro do Norte',
			'Sobral',
			'Brasília',
			'Vila Velha',
			'Vitória',
			'Anápolis',
			'Goiânia',
			'Imperatriz',
			'São Luís',
			'Belo Horizonte',
			'Contagem',
			'Juiz de Fora',
			'Uberlândia',
			'Campo Grande',
			'Dourados',
			'Cuiabá',
			'Rondonópolis',
			'Belém',
			'Marabá',
			'Santarém',
			'Campina Grande',
			'João Pessoa',
			'Caruaru',
			'Olinda',
			'Recife',
			'Parnaíba',
			'Teresina',
			'Curitiba',
			'Londrina',
			'Maringá',
			'Angra dos Reis',
			'Niterói',
			'Rio de Janeiro',
			'Mossoró',
			'Natal',
			'Porto Velho',
			'Boa Vista',
			'Caxias do Sul',
			'Pelotas',
			'Porto Alegre',
			'Blumenau',
			'Florianópolis',
			'Joinville',
			'Aracaju',
			'Campinas',
			'Santos',
			'São Paulo',
			'Palmas',
		   ]
	}

	public getData<T>(): T[] {
		return [
			{ iso: "BR-AC", abbreviation: "AC", name: "Rio Branco" },
			{ iso: "BR-AL", abbreviation: "AL", name: "Arapiraca" },
			{ iso: "BR-AL", abbreviation: "AL", name: "Maceió" },
			{ iso: "BR-AM", abbreviation: "AM", name: "Manaus" },
			{ iso: "BR-AM", abbreviation: "AM", name: "Parintins" },
			{ iso: "BR-AP", abbreviation: "AP", name: "Macapá" },
			{ iso: "BR-BA", abbreviation: "BA", name: "Feira de Santana" },
			{ iso: "BR-BA", abbreviation: "BA", name: "Ilhéus" },
			{ iso: "BR-BA", abbreviation: "BA", name: "Salvador" },
			{ iso: "BR-CE", abbreviation: "CE", name: "Fortaleza" },
			{ iso: "BR-CE", abbreviation: "CE", name: "Juazeiro do Norte" },
			{ iso: "BR-CE", abbreviation: "CE", name: "Sobral" },
			{ iso: "BR-DF", abbreviation: "DF", name: "Brasília" },
			{ iso: "BR-ES", abbreviation: "ES", name: "Vila Velha" },
			{ iso: "BR-ES", abbreviation: "ES", name: "Vitória" },
			{ iso: "BR-GO", abbreviation: "GO", name: "Anápolis" },
			{ iso: "BR-GO", abbreviation: "GO", name: "Goiânia" },
			{ iso: "BR-MA", abbreviation: "MA", name: "Imperatriz" },
			{ iso: "BR-MA", abbreviation: "MA", name: "São Luís" },
			{ iso: "BR-MG", abbreviation: "MG", name: "Belo Horizonte" },
			{ iso: "BR-MG", abbreviation: "MG", name: "Contagem" },
			{ iso: "BR-MG", abbreviation: "MG", name: "Juiz de Fora" },
			{ iso: "BR-MG", abbreviation: "MG", name: "Uberlândia" },
			{ iso: "BR-MS", abbreviation: "MS", name: "Campo Grande" },
			{ iso: "BR-MS", abbreviation: "MS", name: "Dourados" },
			{ iso: "BR-MT", abbreviation: "MT", name: "Cuiabá" },
			{ iso: "BR-MT", abbreviation: "MT", name: "Rondonópolis" },
			{ iso: "BR-PA", abbreviation: "PA", name: "Belém" },
			{ iso: "BR-PA", abbreviation: "PA", name: "Marabá" },
			{ iso: "BR-PA", abbreviation: "PA", name: "Santarém" },
			{ iso: "BR-PB", abbreviation: "PB", name: "Campina Grande" },
			{ iso: "BR-PB", abbreviation: "PB", name: "João Pessoa" },
			{ iso: "BR-PE", abbreviation: "PE", name: "Caruaru" },
			{ iso: "BR-PE", abbreviation: "PE", name: "Olinda" },
			{ iso: "BR-PE", abbreviation: "PE", name: "Recife" },
			{ iso: "BR-PI", abbreviation: "PI", name: "Parnaíba" },
			{ iso: "BR-PI", abbreviation: "PI", name: "Teresina" },
			{ iso: "BR-PR", abbreviation: "PR", name: "Curitiba" },
			{ iso: "BR-PR", abbreviation: "PR", name: "Londrina" },
			{ iso: "BR-PR", abbreviation: "PR", name: "Maringá" },
			{ iso: "BR-RJ", abbreviation: "RJ", name: "Angra dos Reis" },
			{ iso: "BR-RJ", abbreviation: "RJ", name: "Niterói" },
			{ iso: "BR-RJ", abbreviation: "RJ", name: "Rio de Janeiro" },
			{ iso: "BR-RN", abbreviation: "RN", name: "Mossoró" },
			{ iso: "BR-RN", abbreviation: "RN", name: "Natal" },
			{ iso: "BR-RO", abbreviation: "RO", name: "Porto Velho" },
			{ iso: "BR-RR", abbreviation: "RR", name: "Boa Vista" },
			{ iso: "BR-RS", abbreviation: "RS", name: "Caxias do Sul" },
			{ iso: "BR-RS", abbreviation: "RS", name: "Pelotas" },
			{ iso: "BR-RS", abbreviation: "RS", name: "Porto Alegre" },
			{ iso: "BR-SC", abbreviation: "SC", name: "Blumenau" },
			{ iso: "BR-SC", abbreviation: "SC", name: "Florianópolis" },
			{ iso: "BR-SC", abbreviation: "SC", name: "Joinville" },
			{ iso: "BR-SE", abbreviation: "SE", name: "Aracaju" },
			{ iso: "BR-SP", abbreviation: "SP", name: "Campinas" },
			{ iso: "BR-SP", abbreviation: "SP", name: "Santos" },
			{ iso: "BR-SP", abbreviation: "SP", name: "São Paulo" },
			{ iso: "BR-TO", abbreviation: "TO", name: "Palmas" },
		] as T[]
	}

	public getCitiesByState(stateAbbreviation: string): ICity[] {
		const cities: ICity[] = this.getData();
		this.logger.log(`Buscando cidades do estado ${stateAbbreviation} em ${cities.length} registros.`);
		console.log(`Buscando cidades em ${JSON.stringify(cities, null, 2)}`);
		return cities.filter((item) => item.abbreviation === stateAbbreviation);
	}
}
