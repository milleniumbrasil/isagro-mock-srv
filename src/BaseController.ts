// src/BaseController.ts

import { BadRequestException, Get, Param } from '@nestjs/common';
import { BaseService } from './BaseService';
import { IPercentualData, IStackedData } from './types';

export class BaseController<T extends BaseService> {

  getStackedByCountry(country: string) {
    return this.service.getStackedByCountry(country).filter((item) => item.entry[0] === country);
  }

  getStackedByState(state: string) {
    return this.service.getStackedByState(state);
  }

  getStackedByCity(city: string) {
    return this.service.getStackedByCity(city);
  }

  constructor(protected readonly service: T) {}

  getStackedData(): IStackedData[] {
    return this.service.getStackedDataValues();
  }

  getPercentualData(): IPercentualData[] {
    return this.service.getPercentualDataByPeriod();
  }

  getPercentualByLabel(@Param('label') label: string): IPercentualData[] {
    const validLabels = this.service.getValidLabels();
    if (!validLabels.includes(label)) {
      throw new BadRequestException(`Label inválido. As opções válidas são: ${validLabels.join(', ')}`);
    }
    return this.service.getPercentualDataByLabel(label);
  }

  getDataByLabel(@Param('label') label: string): IStackedData[] {
    const validLabels = this.service.getValidLabels();
    if (!validLabels.includes(label)) {
      throw new BadRequestException(`Label inválido. As opções válidas são: ${validLabels.join(', ')}`);
    }
    return this.service.getDataByLabel(label);
  }
}
