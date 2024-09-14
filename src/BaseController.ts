// src/BaseController.ts

import { BadRequestException, Get, Param } from '@nestjs/common';
import { BaseService } from './BaseService';
import { IPercentualData, IStackedData } from './types';

export class BaseController<T extends BaseService> {

  constructor(protected readonly service: T) {}

  getStackedData(): IStackedData[] {
    return this.service.getStackedDataValues();
  }

  getPercentualData(): IPercentualData[] {
    return this.service.getPercentualDataByPeriod();
  }

  @Get('percentual/:label')
  getPercentualByLabel(@Param('label') label: string): IPercentualData[] {
    const validLabels = this.service.getValidLabels();
    if (!validLabels.includes(label)) {
      throw new BadRequestException(`Label inválido. As opções válidas são: ${validLabels.join(', ')}`);
    }
    return this.service.getPercentualDataByLabel(label);
  }

  @Get(':label')
  getDataByLabel(@Param('label') label: string): IStackedData[] {
    const validLabels = this.service.getValidLabels();
    if (!validLabels.includes(label)) {
      throw new BadRequestException(`Label inválido. As opções válidas são: ${validLabels.join(', ')}`);
    }
    return this.service.getDataByLabel(label);
  }
}
