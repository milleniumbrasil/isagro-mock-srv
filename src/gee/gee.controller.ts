import { Controller, Get, Param } from '@nestjs/common';
import { GEEService } from './gee.service';
import { BaseController } from '../BaseController';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller('gees')
export class GEEController extends BaseController<GEEService> {
  constructor(service: GEEService) {
    super(service);
  }

  @ApiOperation({ summary: 'Obter dados empilhados de GEE' })
  @ApiResponse({
    status: 200,
    description: 'Dados empilhados de GEE retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('stacked')
  getStackedData() {
    return super.getStackedData();
  }

  @ApiOperation({ summary: 'Obter dados percentuais de GEE' })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de GEE retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('percentuals')
  getPercentualData() {
    return super.getPercentualData();
  }

  @ApiOperation({ summary: 'Obter dados percentuais de GEE por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os percentuais devem ser retornados. Opções: tecnologia2, tecnologia1, tecnologia3, tecnologia4',
    example: 'hortaliças',
    enum: ['tecnologia2', 'tecnologia1', 'tecnologia3', 'tecnologia4'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de gee por label retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Label inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('percentuals/:label')
  getPercentualByLabel(@Param('label') label: string) {
    return super.getPercentualByLabel(label);
  }

  @ApiOperation({ summary: 'Obter números absolutos de GEE por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os dados devem ser retornados. Opções: tecnologia2, tecnologia1, tecnologia3, tecnologia4',
    example: 'hortaliças',
    enum: ['tecnologia2', 'tecnologia1', 'tecnologia3', 'tecnologia4'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados absolutos de GEE por label retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Label inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get(':label')
  getDataByLabel(@Param('label') label: string) {
    return super.getDataByLabel(label);
  }
}
