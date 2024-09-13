import { Injectable } from "@nestjs/common"
import { IStackedData, IPercentualData } from "../types"
import { BaseService } from "src/BaseService";

@Injectable()
export class OrganicasService extends BaseService {

  protected getStackedDataValues(): IStackedData[] {
    return [
      { period: "2000", entry: ["example1", 500] },
      { period: "2001", entry: ["example2", 600] },
    ];
  }

	getPercentualData(): IPercentualData[] {
		const result = [
			{ period: "1990", value: 100 },
			{ period: "1990", value: 150 },
			{ period: "1990", value: 50 },
			{ period: "1990", value: 10 },
			{ period: "1991", value: 250 },
			{ period: "1991", value: 350 },
			{ period: "1991", value: 200 },
			{ period: "1991", value: 100 },
			{ period: "1992", value: 400 },
			{ period: "1992", value: 500 },
			{ period: "1992", value: 450 },
			{ period: "1992", value: 250 },
			{ period: "1993", value: 800 },
			{ period: "1993", value: 750 },
			{ period: "1993", value: 800 },
			{ period: "1993", value: 450 },
			{ period: "1994", value: 900 },
			{ period: "1994", value: 900 },
			{ period: "1994", value: 1100 },
			{ period: "1994", value: 900 },
			{ period: "1995", value: 1200 },
			{ period: "1995", value: 1300 },
			{ period: "1995", value: 1450 },
			{ period: "1995", value: 900 },
		] as IPercentualData[]
		return result
	}
}

