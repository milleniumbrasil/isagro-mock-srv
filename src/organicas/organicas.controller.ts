import { Controller, Get, Param } from '@nestjs/common';
import { OrganicasService } from './organicas.service';
import { BaseController } from '../BaseController';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CountryService } from 'src/country/country.service';

@Controller('organicas')
export class OrganicasController extends BaseController<OrganicasService> {

  constructor(service: OrganicasService) {
    super(service);
  }

  @ApiOperation({ summary: 'Obter dados empilhados de orgânicas' })
  @ApiResponse({
    status: 200,
    description: 'Dados empilhados de orgânicas retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('stacked')
  getStackedData() {
    return super.getStackedData();
  }

  @ApiOperation({ summary: 'Obter dados percentuais de orgânicas' })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de orgânicas retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('percentual')
  getPercentualData() {
    return super.getPercentualData();
  }

  @ApiOperation({ summary: 'Obter números absolutos de orgânicas por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os dados devem ser retornados. Opções: pastagem, grão, fruticultura, hortaliças',
    example: 'hortaliças',
    enum: ['pastagem', 'grão', 'fruticultura', 'hortaliças'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados absolutos de orgânicas por label retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Label inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get(':label')
  getDataByLabel(@Param('label') label: string) {
    return super.getDataByLabel(label);
  }

  @ApiOperation({ summary: 'Obter números absolutos de orgânicas por estado' })
  @ApiParam({
    name: 'label',
    required: false,
    description: 'O label para o qual os dados devem ser retornados. Opções: pastagem, grão, fruticultura, hortaliças',
    example: 'hortaliças',
    enum: ['pastagem', 'grão', 'fruticultura', 'hortaliças'],
  })
  @ApiParam({
    name: 'cidade',
    required: true,
    description: 'O label para o qual os dados devem ser retornados. Opções: Maceió, Manaus, etc.',
    example: 'Maceió',
    enum: [
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
		'Palmas',],
  })
  @ApiParam({
    name: 'estado',
    required: true,
    description: 'O estado para o qual os dados devem ser retornados. Opções: SP, RJ, MG, etc.',
    example: 'SP',
    enum: [
		'AC', 'MS', 'RS', 'CE', 'RO', 'SC', 'SE', 'AP', 'PB', 'AL', 'PE', 'PR', 'RJ', 'MT',
		'DF', 'AM', 'BA', 'SP', 'ES', 'PI', 'PA', 'RR', 'MA', 'TO', 'GO', 'RN', 'MG'
		],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados absolutos de orgânicas por cidade retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Cidade inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get(':label/:city')
  getDataByCity(@Param('label') label: string, @Param('state') state: string, @Param('city') city: string) {
    return super.getStackedByCity(label, state, city);
  }

  @ApiOperation({ summary: 'Obter números absolutos de orgânicas por estado' })
  @ApiParam({
    name: 'label',
    required: false,
    description: 'O label para o qual os dados devem ser retornados. Opções: pastagem, grão, fruticultura, hortaliças',
    example: 'hortaliças',
    enum: ['pastagem', 'grão', 'fruticultura', 'hortaliças'],
  })
  @ApiParam({
    name: 'estado',
    required: true,
    description: 'O estado para o qual os dados devem ser retornados. Opções: pastagem, grão, fruticultura, hortaliças',
    example: 'hortaliças',
    enum: ['pastagem', 'grão', 'fruticultura', 'hortaliças'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados absolutos de orgânicas por estado retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Estado inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get(':label:state')
  getDataByState(@Param('label') label: string, @Param('state') state: string) {
    return super.getStackedByState(label, state);
  }

  @ApiOperation({ summary: 'Obter números absolutos de orgânicas por país' })
  @ApiParam({
    name: 'label',
    required: false,
    description: 'O label para o qual os percentuais devem ser retornados. Opções: pastagem, grão, fruticultura, hortaliças',
    example: 'hortaliças',
    enum: ['pastagem', 'grão', 'fruticultura', 'hortaliças'],
  })
  @ApiParam({
    name: 'country',
    required: true,
    description: 'O país para o qual os dados devem ser retornados. Opções: BR, US, FR, etc.',
    example: 'BR',
    enum: ['BR', 'US', 'FR'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados absolutos de orgânicas por país retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'país inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get(':label/:country')
  getDataByCountry(@Param('label') label: string, @Param('country') country: string) {
	const countryTaken = this.countryService.getCountryByISO(country);
    return this.service.getStackedByCountry(label, countryTaken);
  }

  @ApiOperation({ summary: 'Obter dados percentuais de orgânicas por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os percentuais devem ser retornados. Opções: pastagem, grão, fruticultura, hortaliças',
    example: 'hortaliças',
    enum: ['pastagem', 'grão', 'fruticultura', 'hortaliças'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de orgânicas por label retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Label inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('percentual/:label')
  getPercentualByLabel(@Param('label') label: string) {
    return super.getPercentualByLabel(label);
  }
}
