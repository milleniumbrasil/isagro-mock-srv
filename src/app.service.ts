import { Injectable } from '@nestjs/common';
import { IPercentualData } from './types';

@Injectable()
export class AppService {

  getData(): { geocodigo: number; data: string; fonte: string; valor: number; }[] {
    return [
      {
        "geocodigo": 11,
        "data": "1990-01-01T00:00:00",
        "fonte": "Emissão de CO2e",
        "valor": 3901.5649837277
      },
      {
        "geocodigo": 11,
        "data": "1990-01-01T00:00:00",
        "fonte": "Emissão de CO2",
        "valor": 3.5339235136
      },
      {
        "geocodigo": 11,
        "data": "1990-01-01T00:00:00",
        "fonte": "Emissão de CH4",
        "valor": 132.8399390375
      },
      {
        "geocodigo": 11,
        "data": "1990-01-01T00:00:00",
        "fonte": "Emissão de N2O",
        "valor": 3.5754591627
      },
      {
        "geocodigo": 11,
        "data": "1991-01-01T00:00:00",
        "fonte": "Emissão de CO2e",
        "valor": 5952.8028173964
      },
      {
        "geocodigo": 11,
        "data": "1991-01-01T00:00:00",
        "fonte": "Emissão de CO2",
        "valor": 3.658116795
      },
      {
        "geocodigo": 11,
        "data": "1991-01-01T00:00:00",
        "fonte": "Emissão de CH4",
        "valor": 210.9510328427
      },
      {
        "geocodigo": 11,
        "data": "1991-01-01T00:00:00",
        "fonte": "Emissão de N2O",
        "valor": 4.9005580997
      },
      {
        "geocodigo": 11,
        "data": "1992-01-01T00:00:00",
        "fonte": "Emissão de CO2e",
        "valor": 5944.8282230978
      },
      {
        "geocodigo": 11,
        "data": "1992-01-01T00:00:00",
        "fonte": "Emissão de CO2",
        "valor": 7.6414381897
      },
      {
        "geocodigo": 11,
        "data": "1992-01-01T00:00:00",
        "fonte": "Emissão de CH4",
        "valor": 209.9926289919
      },
      {
        "geocodigo": 11,
        "data": "1992-01-01T00:00:00",
        "fonte": "Emissão de N2O",
        "valor": 4.9269083099
      },
      {
        "geocodigo": 11,
        "data": "1993-01-01T00:00:00",
        "fonte": "Emissão de CO2e",
        "valor": 6861.7937103296
      },
      {
        "geocodigo": 11,
        "data": "1993-01-01T00:00:00",
        "fonte": "Emissão de CO2",
        "valor": 1.8768500193
      },
      {
        "geocodigo": 11,
        "data": "1993-01-01T00:00:00",
        "fonte": "Emissão de CH4",
        "valor": 245.5262556609
      },
      {
        "geocodigo": 11,
        "data": "1993-01-01T00:00:00",
        "fonte": "Emissão de N2O",
        "valor": 5.4963402949
      },
      {
        "geocodigo": 11,
        "data": "1994-01-01T00:00:00",
        "fonte": "Emissão de CO2e",
        "valor": 7049.2905726239
      },
      {
        "geocodigo": 11,
        "data": "1994-01-01T00:00:00",
        "fonte": "Emissão de CO2",
        "valor": 3.8371677225
      },
      {
        "geocodigo": 11,
        "data": "1994-01-01T00:00:00",
        "fonte": "Emissão de CH4",
        "valor": 255.3666226747
      },
      {
        "geocodigo": 11,
        "data": "1994-01-01T00:00:00",
        "fonte": "Emissão de N2O",
        "valor": 5.4282397701
      },
      {
        "geocodigo": 11,
        "data": "1995-01-01T00:00:00",
        "fonte": "Emissão de CO2e",
        "valor": 7891.77314662
      },
      {
        "geocodigo": 11,
        "data": "1995-01-01T00:00:00",
        "fonte": "Emissão de CO2",
        "valor": 5.9945600507
      },
      {
        "geocodigo": 11,
        "data": "1995-01-01T00:00:00",
        "fonte": "Emissão de CH4",
        "valor": 287.7541986618
      },
      {
        "geocodigo": 11,
        "data": "1995-01-01T00:00:00",
        "fonte": "Emissão de N2O",
        "valor": 5.9449690796
      },
      {
        "geocodigo": 11,
        "data": "1996-01-01T00:00:00",
        "fonte": "Emissão de CO2e",
        "valor": 7362.3439722067
      },
      {
        "geocodigo": 11,
        "data": "1996-01-01T00:00:00",
        "fonte": "Emissão de CO2",
        "valor": 4.6607896042
      },
      {
        "geocodigo": 11,
        "data": "1996-01-01T00:00:00",
        "fonte": "Emissão de CH4",
        "valor": 266.4434914957
      }
    ];
  }
}
