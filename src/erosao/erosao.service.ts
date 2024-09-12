import { Injectable } from "@nestjs/common"
import { IPercentualData } from "../types"

@Injectable()
export class ErosaoService {
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
