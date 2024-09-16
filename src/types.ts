// src/types.ts

import { ApiProperty } from "@nestjs/swagger"

export class IPercentualData {
	@ApiProperty({
		description: "O período de tempo representado",
		example: "1990",
	})
	period: string

	@ApiProperty({ description: "O valor associado ao período", example: 100 })
	value: number
}

export class IStackedData {
	@ApiProperty({
		description: "O período de tempo representado",
		example: "1990",
	})
	period: string;

	@ApiProperty({
		description: "Entrada contendo um rótulo e o valor associado",
		example: ["rótulo", 100],
	})
	entry: [label: string, value: number]
}

export class IData {
	@ApiProperty({
		description: "País relacionado aos dados",
		example: "Brasil",
		required: false,
	})
	country?: string

	@ApiProperty({
		description: "Estado relacionado aos dados",
		example: "São Paulo",
		required: false,
	})
	state?: string

	@ApiProperty({
		description: "Cidade relacionada aos dados",
		example: "Campinas",
		required: false,
	})
	city?: string

	@ApiProperty({
		description: "Rótulo associado aos dados",
		example: "Agricultura",
		required: false,
	})
	label?: string

	@ApiProperty({
		description: "O período de tempo representado",
		example: "1990",
	})
	period: string

	@ApiProperty({
		description: "Entrada contendo um rótulo e o valor associado",
		example: ["rótulo", 100],
	})
	entry: [label: string, value: number]
}

export class ICountry {
	@ApiProperty({
		description: "Código ISO do país",
		example: "BR",
		required: true,
	})
	iso: string

	@ApiProperty({
		description: "Nome completo do país",
		example: "Brasil",
		required: true,
	})
	name: string
}

export class IState {
	@ApiProperty({
		description: "Nome completo do estado",
		example: "São Paulo",
		required: true,
	})
	name: string

	@ApiProperty({
		description: "Código ISO 3166-2 do estado",
		example: "BR-SP",
		required: false,
	})
	iso?: string

	@ApiProperty({
		description: "Abreviação do estado ou UF",
		example: "SP",
		required: true,
	})
	abbreviation: string
}

export class ICity {
	@ApiProperty({
		description: "Nome completo da cidade",
		example: "Campinas",
		required: true,
	})
	name: string

	@ApiProperty({
		description: "Código do estado ou UF da cidade",
		example: "BR-SP",
		required: false,
	})
	stateCode?: string

	@ApiProperty({
		description: "Abreviação do estado ou UF",
		example: "SP",
		required: true,
	})
	abbreviation: string
}

