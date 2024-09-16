import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';
import { BaseController } from '../BaseController';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller('city')
export class CityController extends BaseController<CityService> {
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

}
