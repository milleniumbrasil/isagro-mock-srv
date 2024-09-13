import { Controller, Get } from "@nestjs/common"
import { PoluicaoService } from "./poluicao.service";
import { IStackedData } from "../types";
import { BaseController } from "../BaseController";

@Controller("poluicao")
export class PoluicaoController extends BaseController<PoluicaoService> {

  constructor(service: PoluicaoService) {
    super(service);
  }

  protected getServiceStackedData(): IStackedData[] {
    return this.service.getStackedData();
  }
}
