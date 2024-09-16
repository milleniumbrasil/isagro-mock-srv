import { Controller, Get } from '@nestjs/common';
import { CountryService } from './country.service';
import { BaseController } from '../BaseController';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller('country')
export class CountryController extends BaseController<CountryService> {
  constructor(service: CountryService) {
    super(service);
  }

  @ApiOperation({ summary: 'Obter todos os dados de países' })
  @ApiResponse({
    status: 200,
    description: 'Dados de países retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('')
  getData() {
    return this.service.getData();
  }

}
