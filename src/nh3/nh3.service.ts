import { Injectable } from "@nestjs/common"
import { IStackedData } from "../types"
import { BaseService } from "src/BaseService";

@Injectable()
export class NH3Service extends BaseService {

  protected getStackedDataValues(): IStackedData[] {
    return [
      { period: "2000", entry: ["example1", 500] },
      { period: "2001", entry: ["example2", 600] },
    ];
  }
}

