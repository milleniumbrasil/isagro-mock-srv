import { Controller, Get, Param } from '@nestjs/common';
import { ErosaoService } from './erosao.service';
import { BaseController } from '../BaseController';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller('erosao')
export class ErosaoController extends BaseController<ErosaoService> {
  constructor(service: ErosaoService) {
    super(service);
  }

  @ApiOperation({ summary: 'Obter dados empilhados de erosão' })
  @ApiResponse({
    status: 200,
    description: 'Dados empilhados de erosão retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('stacked')
  getStackedData() {
    return super.getStackedData();
  }

  @ApiOperation({ summary: 'Obter dados percentuais de erosão' })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de erosão retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('percentual')
  getPercentualData() {
    return super.getPercentualData();
  }

  @ApiOperation({ summary: 'Obter dados percentuais de erosão por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os percentuais devem ser retornados. Opções: pastagem, cultura.',
    example: 'pastagem',
    enum: ['pastagem', 'cultura'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de erosao por label retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Label inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('percentual/:label')
  getPercentualByLabel(@Param('label') label: string) {
    return super.getPercentualByLabel(label);
  }

  @ApiOperation({ summary: 'Obter números absolutos de erosão por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os dados devem ser retornados. Opções: pastagem, cultura.',
    example: 'pastagem',
    enum: ['pastagem', 'cultura'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados absolutos de erosão por label retornados com sucesso.',
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
