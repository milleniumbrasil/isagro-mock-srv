import { Injectable } from "@nestjs/common"
import { IPercentualData } from "../types"

@Injectable()
export class OrganicasService {
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
