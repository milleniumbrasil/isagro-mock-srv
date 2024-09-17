import { Controller, Get, Logger, Param } from "@nestjs/common"
import { StateService } from "./state.service"
import { BaseController } from "../BaseController"
import { ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger"

@Controller("states")
export class StateController extends BaseController<StateService> {

	private readonly logger = new Logger(StateController.name)

	constructor(service: StateService) {
		super(service)
	}

	@ApiOperation({ summary: "Obter todos os dados de estados" })
	@ApiResponse({
		status: 200,
		description: "Dados de estados retornados com sucesso.",
		type: Object,
		isArray: true,
	})
	@ApiResponse({ status: 500, description: "Erro no servidor." })
	@Get("")
	getData() {
		return this.service.getData()
	}

	@ApiOperation({ summary: "Obter todos os dados de estados de um país" })
	@ApiParam({
		name: "iso",
		required: true,
		description:
			"O codigo ISO do país para o qual os dados devem ser retornados. Opções: BR, US, JP, etc.",
		example: "BR",
		enum: [
			"AF",
			"AL",
			"DZ",
			"AS",
			"AD",
			"AO",
			"AI",
			"AQ",
			"AG",
			"AR",
			"AM",
			"AW",
			"AU",
			"AT",
			"AZ",
			"BS",
			"BH",
			"BD",
			"BB",
			"BY",
			"BE",
			"BZ",
			"BJ",
			"BM",
			"BT",
			"BO",
			"BA",
			"BW",
			"BR",
			"BN",
			"BG",
			"BF",
			"BI",
			"KH",
			"CM",
			"CA",
			"CV",
			"KY",
			"CF",
			"TD",
			"CL",
			"CN",
			"CO",
			"KM",
			"CG",
			"CD",
			"CR",
			"HR",
			"CU",
			"CY",
			"CZ",
			"DK",
			"DJ",
			"DM",
			"DO",
			"EC",
			"EG",
			"SV",
			"GQ",
			"ER",
			"EE",
			"SZ",
			"ET",
			"FJ",
			"FI",
			"FR",
			"GA",
			"GM",
			"GE",
			"DE",
			"GH",
			"GR",
			"GD",
			"GU",
			"GT",
			"GN",
			"GW",
			"GY",
			"HT",
			"HN",
			"HK",
			"HU",
			"IS",
			"IN",
			"ID",
			"IR",
			"IQ",
			"IE",
			"IL",
			"IT",
			"JM",
			"JP",
			"JO",
			"KZ",
			"KE",
			"KI",
			"KP",
			"KR",
			"KW",
			"KG",
			"LA",
			"LV",
			"LB",
			"LS",
			"LR",
			"LY",
			"LI",
			"LT",
			"LU",
			"MO",
			"MK",
			"MG",
			"MW",
			"MY",
			"MV",
			"ML",
			"MT",
			"MH",
			"MR",
			"MU",
			"MX",
			"FM",
			"MD",
			"MC",
			"MN",
			"ME",
			"MA",
			"MZ",
			"MM",
			"NA",
			"NR",
			"NP",
			"NL",
			"NZ",
			"NI",
			"NE",
			"NG",
			"NO",
			"OM",
			"PK",
			"PW",
			"PA",
			"PG",
			"PY",
			"PE",
			"PH",
			"PL",
			"PT",
			"QA",
			"RO",
			"RU",
			"RW",
			"KN",
			"LC",
			"VC",
			"WS",
			"SM",
			"ST",
			"SA",
			"SN",
			"RS",
			"SC",
			"SL",
			"SG",
			"SK",
			"SI",
			"SB",
			"SO",
			"ZA",
			"SS",
			"ES",
			"LK",
			"SD",
			"SR",
			"SE",
			"CH",
			"SY",
			"TW",
			"TJ",
			"TZ",
			"TH",
			"TL",
			"TG",
			"TO",
			"TT",
			"TN",
			"TR",
			"TM",
			"TV",
			"UG",
			"UA",
			"AE",
			"GB",
			"US",
			"UY",
			"UZ",
			"VU",
			"VE",
			"VN",
			"YE",
			"ZM",
			"ZW",
		],
	})
	@ApiResponse({
		status: 200,
		description: "Dados de estados retornados com sucesso.",
		type: Object,
		isArray: true,
	})
	@ApiResponse({ status: 500, description: "Erro no servidor." })
	@Get(":iso")
	getStatesByCountry(@Param('iso') iso: string) {
		this.logger.log(`Buscando estados do país ${iso}.`);
		return this.service.getStatesByCountry(iso)
	}
}
