import { Controller, Get, Logger, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { BaseController } from '../BaseController';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller('cities')
export class CityController extends BaseController<CityService> {

	private readonly logger = new Logger(CityController.name)

  constructor(service: CityService) {
    super(service);
  }

  @ApiOperation({ summary: 'Obter todos os dados de cidades' })
  @ApiResponse({
    status: 200,
    description: 'Dados de cidades retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('')
  getData() {
    return this.service.getData();
  }

  @ApiOperation({ summary: "Obter todos os dados de cidades de um estado" })
  @ApiParam({
	  name: "stateAbbreviation",
	  required: true,
	  description:
		  "O codigo ISO do estado para o qual os dados devem ser retornados. Opções: SP, RJ, MG, etc.",
	  example: "SP",
	  enum: [
		'AC', 'MS', 'RS', 'CE', 'RO', 'SC', 'SE', 'AP', 'PB', 'AL', 'PE', 'PR', 'RJ', 'MT',
		'DF', 'AM', 'BA', 'SP', 'ES', 'PI', 'PA', 'RR', 'MA', 'TO', 'GO', 'RN', 'MG'
		],
  })
  @ApiResponse({
	  status: 200,
	  description: "Dados de cidades retornados com sucesso.",
	  type: Object,
	  isArray: true,
  })
  @ApiResponse({ status: 500, description: "Erro no servidor." })
  @Get(":stateAbbreviation")
  getCitiesByState(@Param('stateAbbreviation') stateAbbreviation: string) {
	  this.logger.log(`Buscando cidades do estado ${stateAbbreviation}.`);
	  return this.service.getCitiesByState(stateAbbreviation)
  }
}
