import { Controller, Get } from "@nestjs/common"
import { GEEService } from "./gee.service";
import { IStackedData } from "../types";
import { BaseController } from "../BaseController";

@Controller("gee")
export class GEEController extends BaseController<GEEService> {

  constructor(service: GEEService) {
    super(service);
  }

  protected getServiceStackedData(): IStackedData[] {
    return this.service.getStackedData();
  }
}
