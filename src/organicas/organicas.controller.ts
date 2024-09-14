import { Controller, Get } from '@nestjs/common';
import { OrganicasService } from './organicas.service';
import { BaseController } from '../BaseController';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

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
  getPercentualByLabel(label: string) {
    return super.getPercentualByLabel(label);
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
  getDataByLabel(label: string) {
    return super.getDataByLabel(label);
  }
}
