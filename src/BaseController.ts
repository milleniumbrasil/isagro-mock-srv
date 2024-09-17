// src/BaseController.ts

import { BadRequestException, Get, Logger, Param } from '@nestjs/common';
import { BaseService } from './BaseService';
import { ICountry, IData, IPercentualData, IStackedData } from './types';
import { CountryService } from './country/country.service';

export class BaseController<T extends BaseService> {

	private readonly baseLogger = new Logger(BaseController.name);

  getStackedByCountry(label: string, country: string) {
    return this.service.getStackedByCountry(label, country);
  }

  getStackedByState(label: string, state: string) {
    return this.service.getStackedByState(label, state);
  }

  getStackedByCity(label: string, city: string) {
    return this.service.getStackedByCity(label, city);
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
