import { Controller, Get, Param } from "@nestjs/common"
import { BaseController } from "../BaseController";
import { ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";
import { PesticitasService } from "./pesticidas.service";

@Controller("pesticitas")
export class PesticitasController extends BaseController<PesticitasService> {

  constructor(service: PesticitasService) {
    super(service);
  }

  @ApiOperation({ summary: 'Obter dados empilhados de pesticitas' })
  @ApiResponse({
    status: 200,
    description: 'Dados empilhados de pesticitas retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('stacked')
  getStackedData() {
    return super.getStackedData();
  }

  @ApiOperation({ summary: 'Obter dados percentuais de pesticitas' })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de pesticitas retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('percentuals')
  getPercentualData() {
    return super.getPercentualData();
  }

  @ApiOperation({ summary: 'Obter dados percentuais de pesticitas por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os percentuais devem ser retornados. Opções: nitrato, fosfato, cations, anions',
    example: 'hortaliças',
    enum: ['nitrato', 'fosfato', 'cations', 'anions'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de pesticitas por label retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Label inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get(':label/percentuals')
  getPercentualByLabel(@Param('label') label: string) {
    return super.getPercentualByLabel(label);
  }

  @ApiOperation({ summary: 'Obter números absolutos de pesticitas por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os dados devem ser retornados. Opções: nitrato, fosfato, cations, anions',
    example: 'hortaliças',
    enum: ['nitrato', 'fosfato', 'cations', 'anions'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados absolutos de pesticitas por label retornados com sucesso.',
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

