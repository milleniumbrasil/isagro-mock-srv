import { Controller, Get } from '@nestjs/common';
import { StateService } from './state.service';
import { BaseController } from '../BaseController';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('state')
export class StateController extends BaseController<StateService> {
  constructor(service: StateService) {
    super(service);
  }

  @ApiOperation({ summary: 'Obter todos os dados de estados' })
  @ApiResponse({
    status: 200,
    description: 'Dados de estados retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('')
  getData() {
    return this.service.getData();
  }

}
