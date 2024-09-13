import { Controller, Get } from "@nestjs/common"
import { NPKService } from "./npk.service"
import { ApiOperation, ApiResponse } from "@nestjs/swagger"
import { IStackedData } from "src/types"

@Controller("npk")
export class NPKController {
	constructor(private readonly service: NPKService) {}

	@ApiOperation({ summary: "Obter dados empilhados de dados NPK" })
	@ApiResponse({
		status: 200,
		description: "Dados empilhados de NPK retornados com sucesso.",
		type: IStackedData,
		isArray: true,
	})
	@ApiResponse({ status: 500, description: "Erro no servidor." })
	@Get("npk/stacked")
	getData() {
		return this.service.getStackedData()
	}
}
