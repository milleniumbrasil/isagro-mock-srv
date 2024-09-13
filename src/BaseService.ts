import { Injectable } from "@nestjs/common";
import { IStackedData } from "./types";

@Injectable()
export abstract class BaseService {
  // Método genérico que deve ser implementado nas subclasses para fornecer os dados
  protected abstract getStackedDataValues(): IStackedData[];

  // Método comum para todos os serviços
  public getStackedData(): IStackedData[] {
    return this.getStackedDataValues();
  }
}
