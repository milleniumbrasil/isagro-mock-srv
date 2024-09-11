// src/app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IPercentualData, IStackedData } from './data/types';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('data')
export class AppController {

  constructor(private readonly appService: AppService) {
  }

  @ApiOperation({ summary: 'Obter dados gerais' })
  @ApiResponse({ status: 200, description: 'Dados gerais retornados com sucesso.', type: IPercentualData, isArray: true })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
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
  @ApiOperation({ summary: 'Obter dados empilhados de orgânicas' })
  @ApiResponse({ status: 200, description: 'Dados empilhados de orgânicas retornados com sucesso.', type: IStackedData, isArray: true })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('organicas/stacked')
  getStackedDataOrganicas(): IStackedData[] {
    return [
      { period: '1990', entry: ["grão", 100] },
      { period: '1990', entry: ["hortaliças", 150] },
      { period: '1990', entry: ["fruticultura", 50] },
      { period: '1990', entry: ["pastagem", 10] },

      { period: '1990', entry: ["grão", 110] },
      { period: '1990', entry: ["hortaliças", 160] },
      { period: '1990', entry: ["fruticultura", 60] },
      { period: '1990', entry: ["pastagem", 20] },
      
      { period: '1991', entry: ["grão", 250] },
      { period: '1991', entry: ["hortaliças", 350] },
      { period: '1991', entry: ["fruticultura", 200] },
      { period: '1991', entry: ["pastagem", 100] },
      
      { period: '1992', entry: ["grão", 400] },
      { period: '1992', entry: ["hortaliças", 500] },
      { period: '1992', entry: ["fruticultura", 450] },
      { period: '1992', entry: ["pastagem", 250] },
      
      { period: '1992', entry: ["grão", 410] },
      { period: '1992', entry: ["hortaliças", 510] },
      { period: '1992', entry: ["fruticultura", 460] },
      { period: '1992', entry: ["pastagem", 260] },
    
      { period: '1993', entry: ["grão", 800] },
      { period: '1993', entry: ["hortaliças", 750] },
      { period: '1993', entry: ["fruticultura", 800] },
      { period: '1993', entry: ["pastagem", 450] },
    
      { period: '1994', entry: ["grão", 900] },
      { period: '1994', entry: ["hortaliças", 900] },
      { period: '1994', entry: ["fruticultura", 1100] },
      { period: '1994', entry: ["pastagem", 900] },

      { period: '1994', entry: ["grão", 910] },
      { period: '1994', entry: ["hortaliças", 910] },
      { period: '1994', entry: ["fruticultura", 1110] },
      { period: '1994', entry: ["pastagem", 910] },
      
      { period: '1995', entry: ["grão", 1200] },
      { period: '1995', entry: ["hortaliças", 1300] },
      { period: '1995', entry: ["fruticultura", 1450] },
      { period: '1995', entry: ["pastagem", 9000] }
    ] as IStackedData[];

  }

  getPercentualErosaoAreaData(): IPercentualData[] {
    const result = [
      { period: '1990', value: 100 },
      { period: '1990', value: 150 },
      { period: '1991', value: 250 },
      { period: '1991', value: 350 },
      { period: '1992', value: 400 },
      { period: '1992', value: 500 },
      { period: '1993', value: 800 },
      { period: '1993', value: 750 },
      { period: '1994', value: 900 },
      { period: '1994', value: 900 },
      { period: '1995', value: 1200 },
      { period: '1995', value: 1300 },
    ] as IPercentualData[];
    return result;
  }
  
  @ApiOperation({ summary: 'Obter dados de erosão por área' })
  @ApiResponse({ status: 200, description: 'Dados de erosão por área retornados com sucesso.', type: IStackedData, isArray: true })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('erosao/area/stacked')
  getStackedDataErosaoAreaAgropecuaria(): IStackedData[] {
    return [
      { period: '1990', entry: ["culturas", 100] },
      { period: '1990', entry: ["pastagens", 150] },
      
      { period: '1991', entry: ["culturas", 250] },
      { period: '1991', entry: ["pastagens", 350] },
      
      { period: '1992', entry: ["culturas", 400] },
      { period: '1992', entry: ["pastagens", 500] },
    
      { period: '1993', entry: ["culturas", 800] },
      { period: '1993', entry: ["pastagens", 750] },
    
      { period: '1994', entry: ["culturas", 900] },
      { period: '1994', entry: ["pastagens", 900] },
      
      { period: '1995', entry: ["culturas", 1200] },
      { period: '1995', entry: ["pastagens", 1300] }
    ] as IStackedData[];

  }

  getPercentualErosaoRiscoPastagensData(): IPercentualData[] {
    const result = [
      { period: '1990', value: 100 },
      { period: '1990', value: 150 },
      { period: '1990', value: 150 },
      { period: '1991', value: 250 },
      { period: '1991', value: 350 },
      { period: '1991', value: 500 },
      { period: '1992', value: 410 },
      { period: '1992', value: 510 },
      { period: '1992', value: 1500 },
      { period: '1993', value: 800 },
      { period: '1993', value: 750 },
      { period: '1993', value: 15022 },
      { period: '1994', value: 910 },
      { period: '1994', value: 910 },
      { period: '1994', value: 1501 },
      { period: '1995', value: 1200 },
      { period: '1995', value: 1300 },
      { period: '1995', value: 150 },
    ] as IPercentualData[];
    return result;
  }

  @ApiOperation({ summary: 'Obter dados de risco de erosão em culturas' })
  @ApiResponse({ status: 200, description: 'Dados de risco de erosão em culturas retornados com sucesso.', type: IStackedData, isArray: true })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('erosao/risco/culturas/stacked')
  getStackedDataErosaoCulturas(): IStackedData[] {
    return [
      { period: '1990', entry: ["tolerável", 100] },
      { period: '1990', entry: ["moderado", 150] },
      { period: '1990', entry: ["severo", 150] },
      
      { period: '1991', entry: ["tolerável", 250] },
      { period: '1991', entry: ["moderado", 350] },
      { period: '1991', entry: ["severo", 500] },
      
      { period: '1992', entry: ["tolerável", 410] },
      { period: '1992', entry: ["moderado", 510] },
      { period: '1992', entry: ["severo", 1500] },
      
      { period: '1993', entry: ["tolerável", 800] },
      { period: '1993', entry: ["moderado", 750] },
      { period: '1993', entry: ["severo", 15022] },
      
      { period: '1994', entry: ["tolerável", 910] },
      { period: '1994', entry: ["moderado", 910] },
      { period: '1994', entry: ["severo", 1501] },
      
      { period: '1995', entry: ["tolerável", 1200] },
      { period: '1995', entry: ["moderado", 1300] },
      { period: '1995', entry: ["severo", 150] },
    ] as IStackedData[];

  }

  getPercentualErosaoRiscoCulturasData(): IPercentualData[] {
    const result = [
      { period: '1990', value: 100 },
      { period: '1990', value: 150 },
      { period: '1990', value: 150 },
      { period: '1991', value: 250 },
      { period: '1991', value: 350 },
      { period: '1991', value: 500 },
      { period: '1992', value: 410 },
      { period: '1992', value: 510 },
      { period: '1992', value: 1500 },
      { period: '1993', value: 800 },
      { period: '1993', value: 750 },
      { period: '1993', value: 15022 },
      { period: '1994', value: 910 },
      { period: '1994', value: 910 },
      { period: '1994', value: 1501 },
      { period: '1995', value: 1200 },
      { period: '1995', value: 1300 },
      { period: '1995', value: 150 },
    ] as IPercentualData[];
    return result;
  }

  @ApiOperation({ summary: 'Obter dados de risco de erosão em pastagens' })
  @ApiResponse({ status: 200, description: 'Dados de risco de erosão em pastagens retornados com sucesso.', type: IStackedData, isArray: true })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('erosao/risco/pastagens/stacked')
  getStackedDataErosaoPastagens(): IStackedData[] {
    return [
      { period: '1990', entry: ["tolerável", 100] },
      { period: '1990', entry: ["moderado", 750] },
      { period: '1990', entry: ["severo", 150] },
      
      { period: '1991', entry: ["tolerável", 250] },
      { period: '1991', entry: ["moderado", 350] },
      { period: '1991', entry: ["severo", 300] },
      
      { period: '1992', entry: ["tolerável", 410] },
      { period: '1992', entry: ["moderado", 510] },
      { period: '1992', entry: ["severo", 1000] },
      
      { period: '1993', entry: ["tolerável", 800] },
      { period: '1993', entry: ["moderado", 450] },
      { period: '1993', entry: ["severo", 1022] },
      
      { period: '1994', entry: ["tolerável", 910] },
      { period: '1994', entry: ["moderado", 910] },
      { period: '1994', entry: ["severo", 150] },
      
      { period: '1995', entry: ["tolerável", 1200] },
      { period: '1995', entry: ["moderado", 1100] },
      { period: '1995', entry: ["severo", 350] },
    ] as IStackedData[];

  }

  @ApiOperation({ summary: 'Obter dados percentuais de orgânicas' })
  @ApiResponse({ status: 200, description: 'Dados percentuais de orgânicas retornados com sucesso.', type: IPercentualData, isArray: true })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
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

  @ApiOperation({ summary: 'Obter dados percentuais de erosão por área' })
  @ApiResponse({ status: 200, description: 'Dados percentuais de erosão por área retornados com sucesso.', type: IPercentualData, isArray: true })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('erosao/area/percentual')
  getErosaoAsPercentual(): IPercentualData[] {
    const items: IPercentualData[] = this.getPercentualErosaoAreaData();
    
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

  @ApiOperation({ summary: 'Obter dados percentuais de risco de erosão em culturas' })
  @ApiResponse({ status: 200, description: 'Dados percentuais de risco de erosão em culturas retornados com sucesso.', type: IPercentualData, isArray: true })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('erosao/risco/culturas/percentual')
  getErosaoRiscoCultusAsPercentual(): IPercentualData[] {
    const items: IPercentualData[] = this.getPercentualErosaoRiscoCulturasData();
    
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

  @ApiOperation({ summary: 'Obter dados percentuais de risco de erosão em pastagens' })
  @ApiResponse({ status: 200, description: 'Dados percentuais de risco de erosão em pastagens retornados com sucesso.', type: IPercentualData, isArray: true })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  @Get('erosao/risco/pastagens/percentual')
  getErosaoRiscoPastagensAsPercentual(): IPercentualData[] {
    const items: IPercentualData[] = this.getPercentualErosaoRiscoPastagensData();
    
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