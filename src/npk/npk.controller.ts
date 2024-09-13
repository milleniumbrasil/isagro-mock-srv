import { Controller, Get } from "@nestjs/common"
import { NPKService } from "./npk.service";
import { IStackedData } from "../types";
import { BaseController } from "../BaseController";

@Controller("npk")
export class NPKController extends BaseController<NPKService> {

  constructor(service: NPKService) {
    super(service);
  }

  protected getServiceStackedData(): IStackedData[] {
    return this.service.getStackedData();
  }
}
