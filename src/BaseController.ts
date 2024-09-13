import { Get } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { IStackedData } from "./types";

export abstract class BaseController<TService> {

  constructor(protected readonly service: TService) {}

  protected abstract getServiceStackedData(): IStackedData[];

  @ApiOperation({ summary: "Obter dados empilhados." })
  @ApiResponse({
    status: 200,
    description: "Dados empilhados retornados com sucesso.",
    type: IStackedData,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: "Erro no servidor." })
  @Get("stacked")
  getStackedData(): IStackedData[] {
    return this.getServiceStackedData();
  }
}
