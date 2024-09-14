
import { IStackedData, IPercentualData } from "../types"
import { BaseService } from "src/BaseService"
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class OrganicasService extends BaseService {

    private readonly logger = new Logger(OrganicasService.name);

	public getStackedDataValues(): IStackedData[] {
		return [
			{ period: "1990", entry: ["grão", 100] },
			{ period: "1990", entry: ["hortaliças", 150] },
			{ period: "1990", entry: ["fruticultura", 50] },
			{ period: "1990", entry: ["pastagem", 10] },

			{ period: "1990", entry: ["grão", 110] },
			{ period: "1990", entry: ["hortaliças", 160] },
			{ period: "1990", entry: ["fruticultura", 60] },
			{ period: "1990", entry: ["pastagem", 20] },

			{ period: "1991", entry: ["grão", 250] },
			{ period: "1991", entry: ["hortaliças", 350] },
			{ period: "1991", entry: ["fruticultura", 200] },
			{ period: "1991", entry: ["pastagem", 100] },

			{ period: "1992", entry: ["grão", 400] },
			{ period: "1992", entry: ["hortaliças", 500] },
			{ period: "1992", entry: ["fruticultura", 450] },
			{ period: "1992", entry: ["pastagem", 250] },

			{ period: "1992", entry: ["grão", 410] },
			{ period: "1992", entry: ["hortaliças", 510] },
			{ period: "1992", entry: ["fruticultura", 460] },
			{ period: "1992", entry: ["pastagem", 260] },

			{ period: "1993", entry: ["grão", 800] },
			{ period: "1993", entry: ["hortaliças", 750] },
			{ period: "1993", entry: ["fruticultura", 800] },
			{ period: "1993", entry: ["pastagem", 450] },

			{ period: "1994", entry: ["grão", 900] },
			{ period: "1994", entry: ["hortaliças", 900] },
			{ period: "1994", entry: ["fruticultura", 1100] },
			{ period: "1994", entry: ["pastagem", 900] },

			{ period: "1994", entry: ["grão", 910] },
			{ period: "1994", entry: ["hortaliças", 910] },
			{ period: "1994", entry: ["fruticultura", 1110] },
			{ period: "1994", entry: ["pastagem", 910] },

			{ period: "1995", entry: ["grão", 1200] },
			{ period: "1995", entry: ["hortaliças", 1300] },
			{ period: "1995", entry: ["fruticultura", 1450] },
			{ period: "1995", entry: ["pastagem", 9000] },
		]
	}

	public getPercentualDataByLabel(label: string): IPercentualData[] {
		const stacked: IStackedData[] = this.reducePercentualByLabel(this.getStackedDataValues(), label);
		const result: IPercentualData[] = this.toPercentualData(stacked);  // Chama a função de transformação
		return result;
	}

	public getPercentualDataByPeriod(): IPercentualData[] {
		const stacked: IStackedData[] = this.reducePercentualByPeriod(this.getStackedDataValues());
		const result: IPercentualData[] = this.toPercentualData(stacked);  // Chama a função de transformação
		return result;
	}

}
