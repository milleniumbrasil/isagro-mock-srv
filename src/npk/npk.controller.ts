import { Controller, Get, Param } from "@nestjs/common"
import { BaseController } from "../BaseController";
import { ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";
import { NPKService } from "./npk.service";

@Controller("npk")
export class NPKController extends BaseController<NPKService> {

  constructor(service: NPKService) {
    super(service);
  }

  @ApiOperation({ summary: 'Obter dados empilhados de NPK' })
  @ApiResponse({
    status: 200,
    description: 'Dados empilhados de NPK retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('stacked')
  getStackedData() {
    return super.getStackedData();
  }

  @ApiOperation({ summary: 'Obter dados percentuais de NPK' })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de NPK retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('percentual')
  getPercentualData() {
    return super.getPercentualData();
  }

  @ApiOperation({ summary: 'Obter dados percentuais de NPK por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os percentuais devem ser retornados. Opções: dejetos animais, deposição atmosférica, fertilizantes minerais, fertilizantes orgânicos, fixação biológica de nitrogênio, resíduos culturais, resíduos industriais, resíduos urbanos, produção carne bovina, produção agrícola, área agropecuária',
    example: 'hortaliças',
    enum: ['dejetos animais', 'deposição atmosférica', 'fertilizantes minerais', 'fertilizantes orgânicos', 'fixação biológica de nitrogênio', 'resíduos culturais', 'resíduos industriais', 'resíduos urbanos', 'produção carne bovina', 'produção agrícola', 'área agropecuária'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados percentuais de NPK por label retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Label inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('percentual/:label')
  getPercentualByLabel(@Param('label') label: string) {
    return super.getPercentualByLabel(label);
  }

  @ApiOperation({ summary: 'Obter números absolutos de NPK por label' })
  @ApiParam({
    name: 'label',
    required: true,
    description: 'O label para o qual os dados devem ser retornados. Opções: dejetos animais, deposição atmosférica, fertilizantes minerais, fertilizantes orgânicos, fixação biológica de nitrogênio, resíduos culturais, resíduos industriais, resíduos urbanos, produção carne bovina, produção agrícola, área agropecuária',
    example: 'hortaliças',
    enum: ['dejetos animais', 'deposição atmosférica', 'fertilizantes minerais', 'fertilizantes orgânicos', 'fixação biológica de nitrogênio', 'resíduos culturais', 'resíduos industriais', 'resíduos urbanos', 'produção carne bovina', 'produção agrícola', 'área agropecuária'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados absolutos de NPK por label retornados com sucesso.',
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
