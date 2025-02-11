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

	constructor(protected readonly service: T) {}

  getStackedByCountry(label: string, country: string) {
	const countryTaken: ICountry = this.countryService.getCountryByISO(country);
    return this.service.getStackedByCountry(label, countryTaken);
  }

  getStackedByState(label: string, state: string) {
	const stateTaken: IState = this.stateService.getStateByISO(state);
	this.logger.log(`[BaseController] Buscando dados de ${label} para ${stateTaken.name}, ${stateTaken.abbreviation}.`);
    const result =  this.service.getStackedByState(label, stateTaken);
	this.logger.log(`[BaseController] Resultado da busca: ${JSON.stringify(result, null, 2)}`);
	return result;
  }

  getStackedByCity(label: string, state: string, city: string) {
	const cityTaken: ICity = this.cityService.getCityByISO(state, city);
	this.logger.log(`[BaseController] Buscando dados de ${label} para ${cityTaken.name}, ${cityTaken.abbreviation}.`);
    const result = this.service.getStackedByCity(label, cityTaken);
	this.logger.log(`[BaseController] Resultado da busca: ${JSON.stringify(result, null, 2)}`);
	return result;
  }

  getStackedData(): IStackedData[] {
    return this.service.getStackedDataValues();
  }

  getStackedDataByPeriod(period: string): IStackedData[] {
	return this.service.getStackedDataByPeriod(period);
  }

  getStackedDataByPeriodNState(period: string, state: string): IStackedData[] {
	return this.service.getStackedDataByPeriodNState(period, state);
  }

  getPercentualData(): IPercentualData[] {
    return this.service.getPercentualDataByPeriod();
  }

  getPercentualByLabel(@Param('label') label: string): IPercentualData[] {
    const validLabels = this.service.getValidLabels();
    if (!validLabels.includes(label)) {
      throw new BadRequestException(`[BaseController] Label inválido. As opções válidas são: ${validLabels.join(', ')}`);
    }
    return this.service.getPercentualDataByLabel(label);
  }

  getDataByLabel(@Param('label') label: string): IStackedData[] {
    const validLabels = this.service.getValidLabels();
    if (!validLabels.includes(label)) {
      throw new BadRequestException(`[BaseController] Label inválido. As opções válidas são: ${validLabels.join(', ')}`);
    }
    return this.service.getDataByLabel(label);
  }
}
