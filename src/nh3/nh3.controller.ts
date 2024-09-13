import { Controller, Get } from "@nestjs/common"
import { NH3Service } from "./nh3.service";
import { IStackedData } from "../types";
import { BaseController } from "../BaseController";

@Controller("nh3")
export class NH3Controller extends BaseController<NH3Service> {

  constructor(service: NH3Service) {
    super(service);
  }

  protected getServiceStackedData(): IStackedData[] {
    return this.service.getStackedData();
  }
}
