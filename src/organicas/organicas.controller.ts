import { Controller, Get, Param } from '@nestjs/common';
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
  @Get(':label')
  getDataByLabel(@Param('label') label: string) {
    return super.getDataByLabel(label);
  }

  @ApiOperation({ summary: 'Obter números absolutos de orgânicas por cidade' })
  @ApiParam({
    name: 'cidade',
    required: true,
    description: 'O cidade para o qual os dados devem ser retornados. Opções: pastagem, grão, fruticultura, hortaliças',
    example: 'hortaliças',
    enum: ['pastagem', 'grão', 'fruticultura', 'hortaliças'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados absolutos de orgânicas por cidade retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Cidade inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get(':city')
  getDataByCity(@Param('city') city: string) {
    return super.getStackedByCity(city);
  }

  @ApiOperation({ summary: 'Obter números absolutos de orgânicas por estado' })
  @ApiParam({
    name: 'estado',
    required: true,
    description: 'O estado para o qual os dados devem ser retornados. Opções: pastagem, grão, fruticultura, hortaliças',
    example: 'hortaliças',
    enum: ['pastagem', 'grão', 'fruticultura', 'hortaliças'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados absolutos de orgânicas por estado retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Estado inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get(':state')
  getDataByState(@Param('state') state: string) {
    return super.getStackedByState(state);
  }

  @ApiOperation({ summary: 'Obter números absolutos de orgânicas por país' })
  @ApiParam({
    name: 'country',
    required: true,
    description: 'O país para o qual os dados devem ser retornados. Opções: BR, US, FR, etc.',
    example: 'BR',
    enum: ['BR', 'US', 'FR'],
  })
  @ApiResponse({
    status: 200,
    description: 'Dados absolutos de orgânicas por país retornados com sucesso.',
    type: Object,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'país inválido.' })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get(':country')
  getDataByCountry(@Param('country') country: string) {
    return super.getStackedByCountry(country);
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
  getPercentualByLabel(@Param('label') label: string) {
    return super.getPercentualByLabel(label);
  }
}
