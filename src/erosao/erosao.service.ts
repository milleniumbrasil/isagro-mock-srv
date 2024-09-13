import { Injectable } from "@nestjs/common"
import { IPercentualData, IStackedData } from "../types"

@Injectable()
export class ErosaoService {

	getStackedData(): IStackedData[] {
		const result = [
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
			{ period: "1995", entry: ["pastagem", 9000] },] as IStackedData[]
		return result
	}

	getPercentualErosaoAreaData(): IPercentualData[] {
		const result = [
			{ period: "1990", value: 100 },
			{ period: "1990", value: 150 },
			{ period: "1991", value: 250 },
			{ period: "1991", value: 350 },
			{ period: "1992", value: 400 },
			{ period: "1992", value: 500 },
			{ period: "1993", value: 800 },
			{ period: "1993", value: 750 },
			{ period: "1994", value: 900 },
			{ period: "1994", value: 900 },
			{ period: "1995", value: 1200 },
			{ period: "1995", value: 1300 },
		] as IPercentualData[]
		return result
	}

	getPercentualErosaoRiscoPastagensData(): IPercentualData[] {
		const result = [
			{ period: "1990", value: 100 },
			{ period: "1990", value: 150 },
			{ period: "1990", value: 150 },
			{ period: "1991", value: 250 },
			{ period: "1991", value: 350 },
			{ period: "1991", value: 500 },
			{ period: "1992", value: 410 },
			{ period: "1992", value: 510 },
			{ period: "1992", value: 1500 },
			{ period: "1993", value: 800 },
			{ period: "1993", value: 750 },
			{ period: "1993", value: 15022 },
			{ period: "1994", value: 910 },
			{ period: "1994", value: 910 },
			{ period: "1994", value: 1501 },
			{ period: "1995", value: 1200 },
			{ period: "1995", value: 1300 },
			{ period: "1995", value: 150 },
		] as IPercentualData[]
		return result
	}

	getPercentualErosaoRiscoCulturasData(): IPercentualData[] {
		const result = [
			{ period: "1990", value: 100 },
			{ period: "1990", value: 150 },
			{ period: "1990", value: 150 },
			{ period: "1991", value: 250 },
			{ period: "1991", value: 350 },
			{ period: "1991", value: 500 },
			{ period: "1992", value: 410 },
			{ period: "1992", value: 510 },
			{ period: "1992", value: 1500 },
			{ period: "1993", value: 800 },
			{ period: "1993", value: 750 },
			{ period: "1993", value: 15022 },
			{ period: "1994", value: 910 },
			{ period: "1994", value: 910 },
			{ period: "1994", value: 1501 },
			{ period: "1995", value: 1200 },
			{ period: "1995", value: 1300 },
			{ period: "1995", value: 150 },
		] as IPercentualData[]
		return result
	}
}
