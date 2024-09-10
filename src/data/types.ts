
  export interface IPercentualData {
    period: string;
    value: number;
  }
  
  export interface IData {
    country?: string;
    state?: string;
    city?: string;
    label?: string;
    entry: [period: string, value: number];
  }