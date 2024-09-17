// src/BaseController.ts

import { BadRequestException, Get, Logger, Param } from '@nestjs/common';
import { BaseService } from './BaseService';
import { ICity, ICountry, IPercentualData, IStackedData, IState } from './types';
import { CityService } from './city/city.service';
import { CountryService } from './country/country.service';
import { StateService } from './state/state.service';

export class BaseController<T extends BaseService> {

    protected readonly logger = new Logger(BaseController.name);
	protected readonly countryService = new CountryService();
	protected readonly stateService = new StateService();
	protected readonly cityService = new CityService();

  getStackedByCountry(label: string, country: string) {
	const countryTaken: ICountry = this.countryService.getCountryByISO(country);
    return this.service.getStackedByCountry(label, countryTaken);
  }

  getStackedByState(label: string, state: string) {
	const stateTaken: IState = this.stateService.getStateByISO(state);
    return this.service.getStackedByState(label, stateTaken);
  }

  getStackedByCity(label: string, state: string, city: string) {
	const cityTaken: ICity = this.cityService.getCityByISO(state, city);
    return this.service.getStackedByCity(label, cityTaken);
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
