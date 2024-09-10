// src/app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IPercentualAreaChart } from './data/types';


@Controller('data')
export class AppController {

  constructor(private readonly appService: AppService) {
  }

  @Get()
  getData() {
    return this.appService.getData();
  }


  getPercentualData(): IPercentualAreaChart[] {
    const result = [
      { period: '1990', area: 100 },
      { period: '1990', area: 150 },
      { period: '1990', area: 50 },
      { period: '1990', area: 10 },
      { period: '1991', area: 250 },
      { period: '1991', area: 350 },
      { period: '1991', area: 200 },
      { period: '1991', area: 100 },
      { period: '1992', area: 400 },
      { period: '1992', area: 500 },
      { period: '1992', area: 450 },
      { period: '1992', area: 250 },
      { period: '1993', area: 800 },
      { period: '1993', area: 750 },
      { period: '1993', area: 800 },
      { period: '1993', area: 450 },
      { period: '1994', area: 900 },
      { period: '1994', area: 900 },
      { period: '1994', area: 1100 },
      { period: '1994', area: 900 },
      { period: '1995', area: 1200 },
      { period: '1995', area: 1300 },
      { period: '1995', area: 1450 },
      { period: '1995', area: 900},
    ] as IPercentualAreaChart[];
    return result;
  }
  
  @Get('organicas/percentual')
  getOrganicasAsPercentual(): IPercentualAreaChart[] {
    const items: IPercentualAreaChart[] = this.getPercentualData();
    
    if (Array.isArray(items)) {
      const groupedByYear = items.reduce((acc, item: IPercentualAreaChart) => {
        const year: string = item.period;
  
        if (!acc[year]) {
          acc[year] = 0; // Inicializa o total de área como 0 para o ano
        }
  
        acc[year] += item.area; // Soma a área para o ano correspondente
  
        return acc;
      }, {} as { [year: string]: number }); // O acumulador contém apenas o total de área por ano
      
      // Mapeia para o formato da interface IPercentualAreaChart
      const result: IPercentualAreaChart[] = Object.keys(groupedByYear).map(year => {
        return {
          period: year, // 'period' corresponde ao ano como string
          area: groupedByYear[year], // 'area' é o total acumulado de áreas
        };
      });
  
      return result; // Retorna um array de objetos que seguem a interface IPercentualAreaChart
    } else {
      throw Error("Invalid data");
    }
  }
}