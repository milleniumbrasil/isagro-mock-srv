import { Controller, Get, Param } from "@nestjs/common"
import { BaseController } from "../BaseController";
import { ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";
import { PoluicaoService } from "./poluicao.service";

@Controller("poluicoes")
export class PoluicaoController extends BaseController<PoluicaoService> {

  constructor(service: PoluicaoService) {
    super(service);
  }

  @ApiOperation({ summary: 'Obter dados empilhados de poluições' })
  @ApiResponse({
    status: 200,
    description: 'Dados empilhados de poluições retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('stacked')
  getStackedData() {
    return super.getStackedData();
  }

  @ApiOperation({ summary: 'Obter dados empilhados de poluições por período.' })
  @ApiResponse({
    status: 200,
    description: 'Dados empilhados de poluições retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiParam({
    name: 'period',
    required: true,
    description: 'O label para o qual os dados devem ser retornados. Opções: 1990-2000, 1995-2010',
    example: '1990-1995',
    enum: ['1990-1995', '1992-1994', '1990-2010'],
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get(':period/stacked')
  getStackedDataByPeriod(@Param('period') period: string) {
    return super.getStackedDataByPeriod(period);
  }

  @ApiOperation({ summary: 'Obter dados empilhados de poluições por período e localidade.' })
  @ApiResponse({
    status: 200,
    description: 'Dados empilhados de poluições retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiParam({
    name: 'period',
    required: true,
    description: 'O label para o qual os dados devem ser retornados. Opções: 1990-2000, 1995-2010',
    example: '1990-1995',
    enum: ['1990-1995', '1992-1994', '1990-2010'],
  })
  @ApiParam({
    name: 'state',
    required: true,
    description: 'O label para o qual os dados devem ser retornados. Opções: SP, RJ, MG, etc',
    example: 'SP',
    enum: [
		"AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
		"MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
		"RS", "RO", "RR", "SC", "SP", "SE", "TO",
	],
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get(':period/:state/stacked')
  getStackedDataByPeriodNState(@Param('period') period: string, @Param('state') state: string) {
    return super.getStackedDataByPeriodNState(period, state);
  }

  @ApiOperation({ summary: 'Obter dados percentuais de poluições' })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de poluições retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('percentuals')
  getPercentualData() {
    return super.getPercentualData();
  }

  @ApiOperation({ summary: 'Obter dados percentuais de poluições por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os percentuais devem ser retornados. Opções: nitrato, fosfato, cations, anions',
    example: 'hortaliças',
    enum: ['nitrato', 'fosfato', 'cations', 'anions'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de poluições por label retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Label inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get(':label/percentuals')
  getPercentualByLabel(@Param('label') label: string) {
    return super.getPercentualByLabel(label);
  }

  @ApiOperation({ summary: 'Obter números absolutos de poluições por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os dados devem ser retornados. Opções: nitrato, fosfato, cations, anions',
    example: 'hortaliças',
    enum: ['nitrato', 'fosfato', 'cations', 'anions'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados absolutos de poluições por label retornados com sucesso.',
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

