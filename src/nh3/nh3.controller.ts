import { Controller } from '@nestjs/common';
import { NH3Service } from './nh3.service';
import { BaseController } from '../BaseController';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller('nh3')
export class NH3Controller extends BaseController<NH3Service> {
  constructor(service: NH3Service) {
    super(service);
  }

  @ApiOperation({ summary: 'Obter dados empilhados de NH3' })
  @ApiResponse({
    status: 200,
    description: 'Dados empilhados de NH3 retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  getStackedData() {
    return super.getStackedData();
  }

  @ApiOperation({ summary: 'Obter dados percentuais de NH3' })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de NH3 retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  getPercentualData() {
    return super.getPercentualData();
  }

  @ApiOperation({ summary: 'Obter dados percentuais de NH3 por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os percentuais devem ser retornados. Opções: pastagem, grão, fruticultura, hortaliças',
    example: 'hortaliças',
    enum: ['pastagem', 'grão', 'fruticultura', 'hortaliças'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de nh3 por label retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Label inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  getPercentualByLabel(label: string) {
    return super.getPercentualByLabel(label);
  }

  @ApiOperation({ summary: 'Obter números absolutos de NH3 por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os dados devem ser retornados. Opções: pastagem, grão, fruticultura, hortaliças',
    example: 'hortaliças',
    enum: ['pastagem', 'grão', 'fruticultura', 'hortaliças'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados absolutos de NH3 por label retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Label inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  getDataByLabel(label: string) {
    return super.getDataByLabel(label);
  }
}
