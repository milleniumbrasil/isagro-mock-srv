import { Injectable } from "@nestjs/common"
import { IStackedData } from "../types"
import { BaseService } from "src/BaseService";

@Injectable()
export class NPKService extends BaseService {

  protected getStackedDataValues(): IStackedData[] {
    return [
		{
			period: "1990-01-01T00:00:00",
			entry: ["Emissão de CO2e", 3901.5649837277],
		},
		{
			period: "1990-01-01T00:00:00",
			entry: ["Emissão de CO2", 3.5339235136],
		},
		{
			period: "1990-01-01T00:00:00",
			entry: ["Emissão de CH4", 132.8399390375],
		},
		{
			period: "1990-01-01T00:00:00",
			entry: ["Emissão de N2O", 3.5754591627],
		},
		{
			period: "1991-01-01T00:00:00",
			entry: ["Emissão de CO2e", 5952.8028173964],
		},
		{
			period: "1991-01-01T00:00:00",
			entry: ["Emissão de CO2", 3.658116795],
		},
		{
			period: "1991-01-01T00:00:00",
			entry: ["Emissão de CH4", 210.9510328427],
		},
		{
			period: "1991-01-01T00:00:00",
			entry: ["Emissão de N2O", 4.9005580997],
		},
		{
			period: "1992-01-01T00:00:00",
			entry: ["Emissão de CO2e", 5944.8282230978],
		},
		{
			period: "1992-01-01T00:00:00",
			entry: ["Emissão de CO2", 7.6414381897],
		},
		{
			period: "1992-01-01T00:00:00",
			entry: ["Emissão de CH4", 209.9926289919],
		},
		{
			period: "1992-01-01T00:00:00",
			entry: ["Emissão de N2O", 4.9269083099],
		},
		{
			period: "1993-01-01T00:00:00",
			entry: ["Emissão de CO2e", 6861.7937103296],
		},
		{
			period: "1993-01-01T00:00:00",
			entry: ["Emissão de CO2", 1.8768500193],
		},
		{
			period: "1993-01-01T00:00:00",
			entry: ["Emissão de CH4", 245.5262556609],
		},
		{
			period: "1993-01-01T00:00:00",
			entry: ["Emissão de N2O", 5.4963402949],
		},
		{
			period: "1994-01-01T00:00:00",
			entry: ["Emissão de CO2e", 7049.2905726239],
		},
		{
			period: "1994-01-01T00:00:00",
			entry: ["Emissão de CO2", 3.8371677225],
		},
		{
			period: "1994-01-01T00:00:00",
			entry: ["Emissão de CH4", 255.3666226747],
		},
		{
			period: "1994-01-01T00:00:00",
			entry: ["Emissão de N2O", 5.4282397701],
		},
		{
			period: "1995-01-01T00:00:00",
			entry: ["Emissão de CO2e", 7891.77314662],
		},
		{
			period: "1995-01-01T00:00:00",
			entry: ["Emissão de CO2", 5.9945600507],
		},
		{
			period: "1995-01-01T00:00:00",
			entry: ["Emissão de CH4", 287.7541986618],
		},
		{
			period: "1995-01-01T00:00:00",
			entry: ["Emissão de N2O", 5.9449690796],
		},
		{
			period: "1996-01-01T00:00:00",
			entry: ["Emissão de CO2e", 7362.3439722067],
		},
		{
			period: "1996-01-01T00:00:00",
			entry: ["Emissão de CO2", 4.6607896042],
		},
		{
			period: "1996-01-01T00:00:00",
			entry: ["Emissão de CH4", 266.443491495],
		},
	];
  }
}

