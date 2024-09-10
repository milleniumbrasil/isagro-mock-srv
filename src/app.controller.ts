// src/app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IPercentualData } from './data/types';


@Controller('data')
export class AppController {

  constructor(private readonly appService: AppService) {
  }

  @Get()
  getData() {
    return this.appService.getData();
  }


  getPercentualData(): IPercentualData[] {
    const result = [
      { period: '1990', value: 100 },
      { period: '1990', value: 150 },
      { period: '1990', value: 50 },
      { period: '1990', value: 10 },
      { period: '1991', value: 250 },
      { period: '1991', value: 350 },
      { period: '1991', value: 200 },
      { period: '1991', value: 100 },
      { period: '1992', value: 400 },
      { period: '1992', value: 500 },
      { period: '1992', value: 450 },
      { period: '1992', value: 250 },
      { period: '1993', value: 800 },
      { period: '1993', value: 750 },
      { period: '1993', value: 800 },
      { period: '1993', value: 450 },
      { period: '1994', value: 900 },
      { period: '1994', value: 900 },
      { period: '1994', value: 1100 },
      { period: '1994', value: 900 },
      { period: '1995', value: 1200 },
      { period: '1995', value: 1300 },
      { period: '1995', value: 1450 },
      { period: '1995', value: 900},
    ] as IPercentualData[];
    return result;
  }
  
  @Get('organicas/percentual')
  getOrganicasAsPercentual(): IPercentualData[] {
    const items: IPercentualData[] = this.getPercentualData();
    
    if (Array.isArray(items)) {
      const groupedByPeriod = items.reduce((acc, item: IPercentualData) => {
        const period: string = item.period;
  
        if (!acc[period]) {
          acc[period] = 0; // Inicializa o total de área como 0 para o ano
        }
  
        acc[period] += item.value; // Soma a área para o ano correspondente
  
        return acc;
      }, {} as { [period: string]: number }); // O acumulador contém apenas o total de área por ano
      
      // Mapeia para o formato da interface IPercentualData
      const result: IPercentualData[] = Object.keys(groupedByPeriod).map(period => {
        return {
          period: period, // 'period' corresponde ao ano como string
          value: groupedByPeriod[period], // 'area' é o total acumulado de áreas
        };
      });
  
      return result; // Retorna um array de objetos que seguem a interface IPercentualData
    } else {
      throw Error("Invalid data");
    }
  }
}